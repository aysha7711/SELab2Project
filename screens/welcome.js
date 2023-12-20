import React from "react";
import { StyleSheet,View,Text,Image ,TouchableOpacity, Button} from "react-native";
const Welcome=({navigation})=>{
    const Handler1=()=>{
        console.log("Hi Button is pressing? ")
        navigation.navigate('LoginScreen')

    }
  return(
    <View style={{flex:1,backgroundColor:'#6c9654'}}> 
      <View style={styles.Card1}>
        {/* <Text style={styles.Text1}>
          Welcome
        </Text> */}
        <Image style={styles.Image1} source={require('../assets/AppImages/welcome_img.png')}/>
      </View>
      <View style={styles.welcome1}>
        <Text style ={styles.parts}> 
        Turning Wrenches,{'\n'} Building Dreams{'\n'} Your Trusted Source for Auto Excellence.       </Text>
        <View style={styles.start}>
        <TouchableOpacity style={styles.btn1} onPress={Handler1}>
          <Text style={styles.Text2}>
            Lets Get Started
          </Text>
        </TouchableOpacity>
      </View>
      </View>
  
      
       
     
    
  
    </View>
  
  );
};
const styles=StyleSheet.create({
  Card1:{
    // marginTop:20,
    // marginTop:40,
    // backgroundColor:'#94db6b',
    flex:0.7,
    // borderRadius:15,
    // marginLeft:20,
    // marginRight:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,

  

  },
  Text1:{
    margin:20,
    textAlign:'center',
    fontSize:50,
    paddingTop:100,
    
  },
  Text2:{
    color:'#fff',
    fontSize:15,
    
  },
  Image1:{
    width:300,
    height:300,
  },
  welcome1:{
    flex:1,
    backgroundColor:'white',
    borderRadius:25,
  },
  parts:{
    textAlign:"center",
    justifyContent:'center',
    fontSize:30,
  },
  start:{
    justifyContent:'center',
    alignItems:'center',
    margin:70,

  },
  btn1:{
    padding:25,
    backgroundColor:'#6c9654',
    borderRadius:20,
    
  }


})
export default Welcome;