import React from 'react ';
import {view, StyleSheet, ImageBackground} from 'react-native';
const background = ({children}) =>{
return (
    <view>
        <ImageBackground source={require("s.jpg")} style={{height: "100%"}}/>
        <view style={{position:"absolute"}}>
            {children}
        </view>
    </view>
);
}


export default background;