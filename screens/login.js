import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library of your choice

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async() => {
    // Implement your login logic here
    // console.log('Logging in with:', email, password);

    const payload={
      email,
      password,
    }
    try{
    const loginUser= await axios.post('http://10.5.116.127:3001/user/login',payload)
   
   if(loginUser.data.email===email && loginUser.data.password===password){
      Alert.alert("Login SucessFully")
      navigation.navigate("Home",{userData:loginUser.data})
    }
    else{
     Alert.alert(loginUser.data)
    }
  }catch(error){
    if(error.response){
      if(error.response.status===401){
        Alert.alert(error.response.data)
      }
    }
  }

  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Registering with:', email, password);
    navigation.navigate('SignupScreen')
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#3498db" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#3498db" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* Eye Icon to toggle password visibility */}
        <TouchableOpacity onPress={toggleShowPassword}>
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color="#3498db"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Option to navigate to the register screen */}
      <TouchableOpacity onPress={handleRegister}>
        <Text>don't have Already account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#3498db',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
