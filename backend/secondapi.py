from flask import Flask, request, jsonify
import pandas as pd
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load data and initialize TF-IDF vectorizer
recipes = pd.read_csv("recipes.csv")
tfidf_vectorizer = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=0.0, stop_words='english')


@app.route('/',methods=['GET'])
def random_recipe():
    value  = recipes.sample(16)
    data = value.to_dict(orient='records')
    print(type(data))
    data1 = json.dumps(data)
    print(type(data1))
    return data1


@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    print(data)
    ingredients = data['value'].split(",")
    print(ingredients)
    if data['type'] == 'ingredients':
        recommendations = get_recommendations_based_on_ingredients(ingredients)
    elif data['type'] == 'recipe':
        recommendations = get_recommendations_based_on_recipe(ingredients)
    else:
        return jsonify({'error': 'Invalid request'})
    
    rdata = recommendations
    print(rdata)
    return jsonify(rdata)

def get_recommendations_based_on_ingredients(ingredients):
    tfidf_matrix = tfidf_vectorizer.fit_transform(recipes['RecipeIngredientParts'])
    processed_ingredients = ' '.join(ingredients)
    input_tfidf = tfidf_vectorizer.transform([processed_ingredients])
    cosine_similarities = linear_kernel(input_tfidf, tfidf_matrix).flatten()
    top_indices = cosine_similarities.argsort()[-16:][::-1]
    return recipes.iloc[top_indices]

def get_recommendations_based_on_recipe(recipe):
    tfidf_matrix = tfidf_vectorizer.fit_transform(recipes['Name'])
    processed_recipe = ' '.join(recipe)
    input_tfidf = tfidf_vectorizer.transform([processed_recipe])
    cosine_similarities = linear_kernel(input_tfidf, tfidf_matrix).flatten()
    top_indices = cosine_similarities.argsort()[-16:][::-1]
    return recipes.iloc[top_indices]

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=1212)
