import React, { useState } from 'react';
import { View, Image, Button, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

const ImagePickerComponent = () => {
  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync();
    handleImagePickerResult(result);
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    handleImagePickerResult(result);
  };

  const handleImagePickerResult = async (result) => {
    if (!result.cancelled) {
      // If the result is not canceled, read the image file and convert to base64
      const imageUri = result.uri || result.assets[0].uri;
      const imageBase64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setImageUri(`data:image/jpeg;base64,${imageBase64}`);
    }
  };

  const deleteImage = async () => {
    // Delete the image file using expo-file-system
    if (imageUri) {
      await FileSystem.deleteAsync(imageUri);
      console.log('Image deleted successfully');
      setImageUri(null);
    }
  };

  const submitData = async () => {
    // Create a payload with the data to be sent to the API
    const payload = {
      name,
      price,
      imageUri,
    };

    try {
      const result = await axios.post('http://10.5.116.127:3001/product/addProduct', payload);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ marginTop: 30 }}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <Button title="Open Camera" onPress={openCamera} />
      <Button title="Open Gallery" onPress={openGallery} />
      <Button title="Delete Image" onPress={deleteImage} />
      <Button title="Submit" onPress={submitData} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ImagePickerComponent;
