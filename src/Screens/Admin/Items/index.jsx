import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './style';
import { API_CALL } from 'Constants';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCard = ({item, onIncrement, onDecrement, initialValue}) => {
  return (
    <View style={styles.productCard}>
      {/* <Image source={{uri: item.image}} style={styles.productImage} /> */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>
          ${item?.prices * initialValue} {' '}
          <Text style={styles.productPriceText}>per item</Text>
        </Text>
      </View>
      <View style={styles.productAmount}>
        <TouchableOpacity style={styles.amountButton} onPress={onDecrement}>
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{initialValue}</Text>
        <TouchableOpacity style={styles.amountButton} onPress={onIncrement}>
          <Text style={styles.amountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Items = () => {
  const [ItemList, setItemList] = useState();
  const [initialValue , setInitialValue] = useState(0)

  const fetchData = async function () {
    const AccessToken = await AsyncStorage.getItem('AccessToken');

    await axios
      .get(API_CALL.Items, {
        headers: {
          Authorization: `Bearer ${JSON.parse(AccessToken)}`,
          // Authorization: `Bearer yJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5vZEBnbWFpbC5jb20iLCJpYXQiOjE2OTYwNzMxMzEsImV4cCI6MTY5NjA4MDMzMX0.r24he9UnUcPX7T-AlU9XyiGCbtoCbK-P9uhAjzw_hO8`,
        },
      })
      .then(resp => {
        const API_DATA = resp.data;
        console.log(API_DATA);
        setItemList(API_DATA);
      })
      .catch(err => console.log(err, '2'));
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error, '3');
    }
  }, []);

  const handleIncrement = item => {
    // setProducts(
    //   products.map(product =>
    //     product.id === item.id
    //       ? {...product, amount: product.amount + 1}
    //       : product,
    //   ),
    // );
    setInitialValue(initialValue+1)
  };

  const handleDecrement = item => {
    // setProducts(
    //   products.map(product =>
    //     product.id === item.id
    //       ? {...product, amount: Math.max(0, product.amount - 1)}
    //       : product,
    //   ),
    // );
  setInitialValue(initialValue - 1)
  };

  const renderProductItem = ({item}) => (
    <ProductCard
      item={item}
      onIncrement={() => handleIncrement(item)}
      onDecrement={() => handleDecrement(item)}
      initialValue={initialValue}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>List of Items</Text>
      <FlatList
        data={ItemList}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Items;
