import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View,Text } from "react-native";
const  Editor=({navigation,route})=>{
    console.log("routes",route.params)
    const getdata=async()=>{

        const data=JSON.parse(await AsyncStorage.getItem("List"))
        console.log(data)
        
    }
    getdata();
    return(
        <View>
            <Text>Title</Text>
            <Text>Content</Text>
        </View>
    )
}
export default Editor ;