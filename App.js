import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PopularArticlesScreen from './PopularArticlesScreen';
import RecommendedArticlesScreen from './RecommendedArticlesScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular Articles" component={PopularArticlesScreen} />
      <Tab.Screen name="Recommended Articles" component={RecommendedArticlesScreen} />
    </Tab.Navigator>
  );
};

export default App;
