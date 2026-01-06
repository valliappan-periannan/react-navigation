import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface ListItemProps {
    item: string;
}

const ListItem = ({item}: ListItemProps) => {
    return (
        <View>
            {console.log('item', item)}
            <Text style={styles.input}>{item}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      width: 200,
      paddingHorizontal: 10,
    },
  });

const equals = (prevProps:ListItemProps, nextProps:ListItemProps) => {
    return prevProps.item === nextProps.item;
}

export default React.memo(ListItem, equals);