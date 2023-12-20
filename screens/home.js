import React, { useState,useRef,useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import axios from 'axios';
// import { useAppContext } from '../Context';
const windowWidth = Dimensions.get('window').width;
const images = [
  require('../assets/AppImages/20.png'),
  require('../assets/AppImages/21.png'),
  require('../assets/AppImages/22.png'),
  require('../assets/AppImages/21.png'),

];
// const duplicatedImages = [...images, ...images];

// const products = [
//   { id: 1, name: 'Product 1', price: '$19.99', image: require('../assets/AppImages/part11.png') },
//   { id: 2, name: 'Product 2', price: '$29.99', image: require('../assets/AppImages/part12.png') },
//   { id: 3, name: 'Product 3', price: '$39.99', image: require('../assets/AppImages/13.png') },
//   { id: 4, name: 'Product 4', price: '$39.99', image: require('../assets/AppImages/14.png') },
//   { id: 5, name: 'Product 5', price: '$39.99', image: require('../assets/AppImages/15.png') },
//   { id: 6, name: 'Product 6', price: '$39.99', image: require('../assets/AppImages/16.png') },



//   // Add more products as needed
// ];

const HomeScreen = ({ route,navigation}) => {
  const [productData, setProductData] = useState([]);
  const {userData}=route.params;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://10.5.116.127:3001/product/getProducts');
      setProductData(result.data);
      // console.log("The Results are :: ", result.data);
    } catch (err) {
      console.log(err);
    }
  };

  

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductPress = async(productId) => {
    // Add the selected product to the state
    const selectedProduct = productData.find(product => product._id === productId);
    console.log(selectedProduct.name)
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, selectedProduct]);
    const payload={
      name:selectedProduct.name,
      price:selectedProduct.price,
      imageUri:selectedProduct.imageUri,
      userId:userData._id,
    }
    try{
    const addCart=await axios.post('http:10.5.116.127:3001/cart/addCart',payload)
    console.log("Add Cart Information",addCart.data)
    Alert.alert("Product Added in cart")
  }catch(err){
    console.log(err)
  }
    // Navigate to ViewCartScreen
    // navigation.navigate('Cart', { selectedProducts: [...selectedProducts, selectedProduct] });
  };
  const navigateCart=()=>{
    setSelectedProducts("")
    // console.log('App Use Context this is variable : ',varStatic)
    // navigation.navigate('Cart', { selectedProducts })
    navigation.navigate('Cart',{loginInfo:userData})
  }
  const decodeBase64Image = async (base64String) => {
    try {
      const imagePath = `${FileSystem.cacheDirectory}${Date.now()}.png`;
      await FileSystem.writeAsStringAsync(imagePath, base64String, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Image successfully written to cache, set the image URI
      setProductData((prevData) => ({
        ...prevData,
        imageUri: imagePath,
      }));
    } catch (error) {
      console.log('Error writing image to cache:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our Store</Text>
      <View style={styles.card1}>
        <Text style={styles.Text1}>
          We deal in 
        </Text>
       <View style={styles.card2}>
       <ScrollView
        // ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
    
      >
      {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
      </View> 
      </View> 
      <Text>
        Main Products
      </Text>
      <ScrollView>
        <View style={styles.rowContainer}>
          {productData.map((product,index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handleProductPress(product._id)}
            >
              <Image source={{ uri: product.imageUri }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        {/* View Cart button */}
        <TouchableOpacity
          style={styles.button}
          onPress={navigateCart}
        >
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile',{loginInfo:userData})}>
          <Text style={styles.buttonText}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  Text1:{
    marginLeft:10,
    marginBottom:20,
    fontSize:20,
    color:'#fff',
    alignSelf:'center'
  },
  card1:{
    backgroundColor:"#6c9654",
    flex:6,
    // padding:60,
    borderRadius:20,
    marginBottom:10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow items to wrap to the next row
  },
  card: {
    width: windowWidth / 3 - 24, // Divide the width by 3 to have 3 items in a row with some spacing
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100, // Set a fixed height for the images
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 14, // Adjust font size
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 12, // Adjust font size
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card2: {
    // borderWidth: 1,
    // borderColor:null,
    // borderRadius: 8,
    overflow: 'hidden',
    // margin: 10,
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 90, // Adjust the height as needed
  },
});

export default HomeScreen;
