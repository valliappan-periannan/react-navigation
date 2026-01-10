import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import apiClient from '../../api';
import { Article, HeadlinesResponse } from '../../types/Headlines';

const NewsScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchData = async () => {
    try {
      const response = await apiClient({
        url: '/v2/top-headlines',
        method: 'GET',
        params: {
          sources: 'techcrunch',
        },
      });
      const data: HeadlinesResponse = response.data;
      setArticles(data.articles);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log('screen 211loaded');
    fetchData();
  }, []);
  const renderItem = ({ item }: { item: Article }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
  return (
    <View>
      <FlatList data={articles} renderItem={renderItem} />
    </View>
  );
};

export default NewsScreen;
