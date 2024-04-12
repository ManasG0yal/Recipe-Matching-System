from flask import Flask, request, jsonify
import pandas as pd
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask_cors import CORS


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


# Route for getting recipe recommendations based on input data
@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    ingredients = data['value'].split(",")
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
    app.run(debug=True, host='0.0.0.0', port=1212)
