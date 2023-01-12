import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView, Alert } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Top from "./Top";
import { Appearance } from "react-native";
import { ImageBackground } from "react-native";
const Theme = Appearance.getColorScheme();
const Notes = ({ navigation,route }) => {
    let [data, setdata] = useState();
    const fetchdata = async () => {
        const object = await AsyncStorage.getItem("List");
        setdata(JSON.parse(object));
        // await AsyncStorage.clear();
    }
    useEffect(() => {
        fetchdata();
    },[])
    useEffect(() => {
        const focushandler=navigation.addListener('focus',()=>{
            fetchdata();
        })
        return () => {
          focushandler();
      }
    }, [navigation])
    const renderItem = ({ item }) => {
        var count = 1;
        const nav_to_editor=()=>{
            console.log(item)
            navigation.navigate("Editor",{item})
        }
        console.log("helo item",item.title)
        return (            
                <TouchableOpacity onPress={()=>{nav_to_editor()}} style={{backgroundColor:item.rgba}} className=" border-2 mx-4 my-1 rounded-xl h-20 p-3 ">
                    <Text className=" text-2xl">{item.title}</Text>
                    <Text className=" text-base">{item.content}</Text>
                </TouchableOpacity>
        )
    }
    const navi = async () => {
        navigation.navigate("NoteScreen")
    }
if(data){
    return (
            <View className="flex-1 bg-black">
                <Top navi={()=>{navi()}}></Top>
                <View className="flex-1 flex-col">
                    <FlatList className="flex-1 h-full" data={data} renderItem={renderItem}></FlatList>
                    <TouchableOpacity onPress={()=>{navi()}} className=" bg-slate-900 items-center justify-center border-x-2  absolute bottom-[70px] right-2 w-[70px] h-[70px] border-2 rounded-full p-1">
                            <Text className=" font-bold text-3xl">+</Text>
                        </TouchableOpacity>     
                </View>
            </View>
    )

}
else{
    return(
        <ImageBackground source={require("../Notebook-rafiki.png")} resizeMode="contain" className="w-full h-full flex-1 bg-black">
            <View className="flex-1">
                <Top></Top>
                
            </View>
            
            <TouchableOpacity onPress={()=>{navi()}} className=" border-8 border-white absolute bottom-0 right-0 w-[70px] h-[70px] items-center justify-center bg-slate-900 rounded-full">
                            <Text className=" font-bold text-3xl">+</Text>
                        </TouchableOpacity>
        </ImageBackground>
    )
}
}
export default Notes;