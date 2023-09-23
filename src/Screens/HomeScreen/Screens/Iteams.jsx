import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';


const ProductCard = ({ item, onIncrement, onDecrement }) => {
  return (
    
    <View style={styles.productCard}>
       
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)} <Text style={styles.productPriceText}>per item</Text></Text>
      </View>
      <View style={styles.productAmount}>
        <TouchableOpacity style={styles.amountButton} onPress={onDecrement}>
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{item.amount}</Text>
        <TouchableOpacity style={styles.amountButton} onPress={onIncrement}>
          <Text style={styles.amountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Iteams = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'God Swami samarth', price: 5.99, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/wall-decoration/o/d/j/swami-samarth-metal-sheet-frame-with-yellow-led-light-2-x-1-foot-original-imagzhz2hzkbdgmz.jpeg?q=90', amount: 0 },
    { id: 2, name: 'God Ganesh', price: 9.99, image: 'https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', amount: 0 },
    { id: 3, name: 'God Durga',  price: 4.99, image: 'https://i.pinimg.com/736x/d9/33/7f/d9337f56e4d4734c5b70a78e87565730.jpg', amount: 0 },
    { id: 4, name: 'God Hanuman', price: 2.99, image: 'https://aakaar.com/cdn/shop/products/Aakaar_-1511@2x.jpg?v=1670666932', amount: 0 },
    { id: 5, name: 'God shankarji',  price: 3.99, image: 'https://www.bhaktiphotos.com/wp-content/uploads/2021/01/Hindu-Lord-Shiva-Wallpapers-for-Desktop-1080p-Download-Free.jpg', amount: 0 },
    { id: 6, name: 'Sceneries',  price: 5.99, image: 'https://5.imimg.com/data5/AN/TC/MY-64355810/natural-scenery-painting-500x500.jpg', amount: 0 },
    { id: 7, name: 'Symbols',  price: 9.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/ReligijneSymbole.svg/800px-ReligijneSymbole.svg.png', amount: 0 },
    { id: 8, name: 'Shivaji maharaj', price: 4.99, image: 'https://dbrush.in/wp-content/uploads/2021/04/31-min-1-600x600.jpg', amount: 0 },
    { id: 9, name: 'Natures', price: 2.99, image: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg', amount: 0 },
    { id: 10, name: 'Riding Hourse', price: 3.99, image: 'https://rukminim1.flixcart.com/image/850/1000/kq18n0w0/painting/a/7/g/20-fap-317-frizzy-arts-original-imag44yzg8srttqs.jpeg?q=90', amount: 0 },
  ]);

  const handleIncrement = (item) => {
    setProducts(
      products.map((product) =>
        product.id === item.id ? { ...product, amount: product.amount + 1 } : product
      )
    );
  };

  const handleDecrement = (item) => {
    setProducts(
      products.map((product) =>
        product.id === item.id ? { ...product, amount: Math.max(0, product.amount - 1) } : product
      )
    );
  };

  const renderProductItem = ({ item }) => (
    <ProductCard item={item} onIncrement={() => handleIncrement(item)} onDecrement={() => handleDecrement(item)} />
  );

  return (
    <View style={styles.container}>
        <Text style={{color:'black',fontSize:30,textAlign:'center',marginBottom:10}}>List of Items</Text>
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
      {/* <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop:20,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
  productAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ffa726',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  continueButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Iteams;
