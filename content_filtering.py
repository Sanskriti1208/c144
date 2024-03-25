from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

def get_recommendations(articles_csv, content_id):
    df = pd.read_csv(articles_csv).dropna(subset=['title'])
    
    count_vectorizer = CountVectorizer(stop_words='english')
    count_matrix = count_vectorizer.fit_transform(df['title'])
    
    cosine_sim = cosine_similarity(count_matrix, count_matrix)
    
    df = df.set_index('title')
    
    idx = df.index.get_loc(content_id)
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:6]  
    recommended_articles = [df.iloc[score[0]].to_dict() for score in sim_scores]
    
    return recommended_articles
