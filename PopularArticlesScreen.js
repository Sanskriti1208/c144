// PopularArticlesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';

const PopularArticlesScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('articles.csv/popular_articles');
      const data = await response.json();
      setArticles(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching popular articles:', error);
      setLoading(false);
    }
  };

  const renderArticleItem = ({ item }) => (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Image source={{ uri: item.image }} />
      <Text>{item.description}</Text>
    </Card>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default PopularArticlesScreen;
