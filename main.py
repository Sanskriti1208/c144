# main.py
from flask import Flask, jsonify
from demographic_filtering import get_popular_articles
from content_filtering import get_recommendations
from storage import all_articles, liked_articles, not_liked_articles

app = Flask(__name__)

# Import output from demographic_filtering.py
popular_articles = get_popular_articles('articles.csv')

# Import get_recommendation() function from content_filtering.py
content_csv = 'articles.csv'

@app.route('/popular_articles', methods=['GET'])
def get_popular():
    return jsonify(popular_articles)

@app.route('/recommended_articles', methods=['GET'])
def get_recommended():
    content_id = request.args.get('contentId')
    recommended_articles = get_recommendations(content_csv, content_id)
    return jsonify(recommended_articles)

if __name__ == '__main__':
    app.run(debug=True)
