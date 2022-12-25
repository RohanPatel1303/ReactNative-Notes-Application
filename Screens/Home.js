import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Top from "./Top";
import { Appearance } from "react-native";

const imgURI = { uri: "https://images.wallpapersden.com/image/wxl-cool-anonymous-neon-boy_73255.jpg" }
const Home = ({ navigation }) => {
    const[colorscheme,setcolorcheme]=useState(Appearance.getColorScheme())
    const navigate = async () => {
        navigation.navigate("Notes")
    }
    var boolean;
if(colorscheme=="light")
{
    boolean=1;
    
}else{
    boolean=0;
}
    return (
        <View className={colorscheme==="light"?"flex-1 bg-slate-200":"flex-1 bg-black"}>
            <Top></Top>
            <TouchableOpacity onPress={() => { navigate(); }}>
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;