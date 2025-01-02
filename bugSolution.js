The solution involves using the `keyExtractor` prop in FlatList to efficiently update only necessary items instead of re-rendering the whole list.  We also leverage `useMemo` to prevent unnecessary re-renders of the `renderItem` function and potentially add `getItemLayout` for further optimization (not implemented here for simplicity, but highly recommended for optimal performance with very large lists).

```javascript
import React, { useState, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

const MyComponent = () => {
  const [items, setItems] = useState(Array.from({ length: 10000 }, (_, i) => i));

  const memoizedRenderItem = useMemo(() => ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  ), []);

  const addItem = () => {
    setItems([...items, items.length]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={memoizedRenderItem}
        keyExtractor={(item) => item.toString()}
      />
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyComponent;
```