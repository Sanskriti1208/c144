import React, { useState, useEffect } from 'react';
import { View, Button, WebView } from 'react-native';

const HomeScreen = () => {
  const [articleUrl, setArticleUrl] = useState('');
  
  useEffect(() => {
    fetchArticle(); 
  }, []);

  const fetchArticle = async () => {
    const response = await fetch('articles.csv/popular_articles');
    const data = await response.json();
    setArticleUrl(data[0].url); 
  };

  const handleLike = async () => {
    await fetch('articles.csv/like_article', {
      method: 'POST',
    });
    fetchArticle(); 
  };

  const handleDislike = async () => {
    await fetch('articles.csv/dislike_article', {
      method: 'POST',
    });
    fetchArticle(); 
  };

  return (
    <View>
      <WebView source={{ uri: articleUrl }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="Like" onPress={handleLike} />
        <Button title="Dislike" onPress={handleDislike} />
      </View>
    </View>
  );
};

export default HomeScreen;
