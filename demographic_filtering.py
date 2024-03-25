import numpy as np
import pandas as pd

def get_popular_articles(articles_csv):
    df = pd.read_csv(articles_csv)
    df_sorted = df.sort_values(by='total_events', ascending=False)
    top_articles = df_sorted.head(20)
    popular_articles = top_articles.to_dict(orient='records')
    return popular_articles
