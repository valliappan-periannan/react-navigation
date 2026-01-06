import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from './ListItem';
import { useNavigation, useRoute } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const [list,setList] = useState<Array<string>>(['a']);



  useEffect(()=>{
    console.log('navigation', route.params);
  },[])
  
const renderItem = useCallback(({item}: {item: string}) => {
    return <ListItem item={item} />;
}, []);

  return (
    <View style={styles.root}>
      <Text>Welcome {route.params?.username}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{
          setList([...list, new Date().getTime().toString()]);
        }}>
            
          <Text>Add Item</Text>
        </TouchableOpacity>
        <ListItem item="Static Item" />
      <FlatList data={list} renderItem ={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ff8c00',
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
    paddingHorizontal: 10,
  },
});

export default DashboardScreen;
