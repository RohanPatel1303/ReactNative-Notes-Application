import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState,useEffect } from "react";
import { View,Text,FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const  Editor=({navigation,route})=>{
    const data=route.params.item;
    // console.log(data.title,"data");
    const [title,settitle]=useState(data.title);
    const [content,setcontent]=useState(data.content);
    const [olddata,setolddata]=useState();
    setTimeout(async() => {
        setolddata(JSON.parse(await AsyncStorage.getItem("List"))) 
        // console.log("fetching....")
    }, 2000);
    
    const renderItem=({item})=>{
            
        return(
            <View className="m-3">
                <TextInput defaultValue={title} onChangeText={newtext=>{settitle(newtext)}}></TextInput>
                <TextInput defaultValue={content} onChangeText={newtext=>{setcontent(newtext);data.title=newtext}}></TextInput>
            </View>
        )
    }
    const savedata=async()=>{
        const id_to_change=data.id;
        console.log(id_to_change,olddata,"id to change")
        olddata.forEach( async element => {
            if(element.id===id_to_change)
            {

                console.log("element : ",element.id)
                element.content=content;
                element.title=title
                console.log("done ",olddata)
                await AsyncStorage.setItem("List",JSON.stringify(olddata));
            }
            
            
        });
        console.log("new old data",olddata)
        // AsyncStorage.clear()
    }
    const savedsuccesfully=()=>{

    }
return(
    <View className="bg-black flex-1">
        <Text>Welcome</Text>
        <TouchableOpacity onPress={()=>{savedata()}}><Text>Savveeee</Text></TouchableOpacity>
        <FlatList data={[data]} renderItem={renderItem}></FlatList>
    </View>
)
}
export default Editor ;