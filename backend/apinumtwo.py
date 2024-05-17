from flask import Flask, request, jsonify
import pandas as pd
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask_cors import CORS
import os
import boto3
labels =[]
# function to analyse the image

# Replace 'image_path' with the path to your image file
image_path = ''

# Replace 'rekognition_arn' with your Rekognition ARN
rekognition_arn = 'arn:aws:rekognition:us-east-1:877147146763:project/vege-reco/version/vege-reco.2024-05-08T19.44.28/1715177668960'

def analyze_image(image_path, rekognition_arn):
    # Initialize Rekognition client
    rekognition_client = boto3.client('rekognition')
    # Read the image as bytes
    with open(image_path, 'rb') as image_file:
        image_bytes = image_file.read()
    try:
        # Perform image analysis using the custom model
        response = rekognition_client.detect_custom_labels(
            Image={'Bytes': image_bytes},
            MinConfidence=10 ,  # You can adjust this confidence threshold as needed
            ProjectVersionArn=rekognition_arn
        )
        # Print detected labels
        for label in response['CustomLabels']:
            labels.append(label['Name'])

    except Exception as e:
        print("Error:", e)





# Initialize Flask app
app = Flask(__name__)
CORS(app)


# Load recipe data from JSON file
with open("csvjson.json", "r") as file:
    recipes = json.load(file)

# Convert recipe data to DataFrame for easier manipulation    
recipes = pd.DataFrame(recipes)
tfidf_vectorizer = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=0.0, stop_words='english')


# Route for getting a random selection of recipes
@app.route('/', methods=['GET'])
def random_recipe():
    value = recipes.sample(30)
    data = value.to_dict(orient='records')
    return jsonify(data)

@app.route('/imagesearch', methods=['POST'])
def image_search():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    image_file = request.files['image']
    # Specify the directory where you want to save the image
    upload_directory = '../frontend/images/'
    # Save the image locally
    try:
        image_path = os.path.join(upload_directory, 'download.jpg')
        image_file.save(image_path)
        analyze_image(image_path, rekognition_arn)
        print(labels)
        recommendations = get_recommendations_based_on_ingredients(labels)
        labels.clear()
        return jsonify(recommendations)
    except Exception as e:
        return jsonify({'error': 'Failed to save image', 'exception': str(e)}), 500


# Route for getting recipe recommendations based on input data
@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    ingredients = data['value'].split(",")
    print(ingredients)
    if data['type'] == 'ingredients':
        recommendations = get_recommendations_based_on_ingredients(ingredients)
    elif data['type'] == 'recipe':
        recommendations = get_recommendations_based_on_recipe(ingredients)
    else:
        return jsonify({'error': 'Invalid request'})

    return jsonify(recommendations)


# Function to get recipe recommendations based on input ingredients
def get_recommendations_based_on_ingredients(ingredients):
    tfidf_matrix = tfidf_vectorizer.fit_transform(recipes['RecipeIngredientParts'])
    processed_ingredients = ' '.join(ingredients)
    input_tfidf = tfidf_vectorizer.transform([processed_ingredients])
    cosine_similarities = linear_kernel(input_tfidf, tfidf_matrix).flatten()
    top_indices = cosine_similarities.argsort()[-30:][::-1]
    return recipes.iloc[top_indices].to_dict(orient='records')


# Function to get recipe recommendations based on a specific recipe name
def get_recommendations_based_on_recipe(recipe):
    tfidf_matrix = tfidf_vectorizer.fit_transform(recipes['Name'])
    processed_recipe = ' '.join(recipe)
    input_tfidf = tfidf_vectorizer.transform([processed_recipe])
    cosine_similarities = linear_kernel(input_tfidf, tfidf_matrix).flatten()
    top_indices = cosine_similarities.argsort()[-30:][::-1]
    return recipes.iloc[top_indices].to_dict(orient='records')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=2000)
