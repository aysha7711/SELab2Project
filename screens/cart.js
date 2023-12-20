import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';

const CartScreen = ({ route }) => {
  const { loginInfo } = route.params;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the API    
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`http://10.5.116.127:3001/cart/getCart/${loginInfo._id}`);
      if(response.data==="No"){
        setCartItems([])
      }
      else{
      setCartItems(response.data);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      // Make a DELETE request to your API endpoint with the item ID
      await axios.delete(`http://10.5.116.127:3001/cart/deleteCart/${itemId}`);

      // Update the local state to remove the deleted item
      setCartItems((prevItems) => prevItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleOrderItem = (item) => {
    // Add your logic to handle the ordering of the product
    // For example, you can show an alert with the order details
    Alert.alert('Order Confirmation', `You have ordered ${item.name} for $${item.price}`);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
      <Image source={{ uri: item.imageUri }} style={{ width: 50, height: 50 }} />
      <Text>{item.productName}</Text>
      <Text>${item.price}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleDeleteItem(item._id)}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </TouchableOpacity>
        <Button title="Order" onPress={() => handleOrderItem(item)} />
      </View>
    </View>
  );

  // const renderEmptyCartMessage = () => (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>No items in the cart</Text>
  //   </View>
  // );
  const renderEmptyCartMessage = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No items in the cart</Text>
    </View>
  );

  // return (
  //   <View>
  //     {cartItems.length > 0 ? (
  //       <FlatList
  //         data={cartItems}
  //         renderItem={renderItem}
  //         keyExtractor={(item) => item._id.toString()}
  //       />
  //     ) : (
  //       renderEmptyCartMessage()
  //     )}
  //   </View>
  // );
  return (
    <View>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item._id.toString()}
        />
      ) : (
        <View>
          {renderEmptyCartMessage()}
        </View>
      )}
    </View>
  );
};

export default CartScreen;
