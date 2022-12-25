import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Dimensions, ScrollView } from "react-native";

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Top from "./Top";
import NoteSticker from "./NoteSticker";
import { Appearance } from "react-native";
import { ImageBackground } from "react-native";
const Theme = Appearance.getColorScheme();
const Notes = ({ navigation,route }) => {
    let [data, setdata] = useState();
    const fetchdata = async () => {
        const object = await AsyncStorage.getItem("List");
        setdata(JSON.parse(object));
        // await AsyncStorage.clear();
        // console.log(object,"ygasdgaysh")

    }
    setTimeout(() => {
        fetchdata();
    }, 2000);
    const renderItem = ({ item }) => {
        var count = 1;
        const nav_to_editor=()=>{
            console.log(item)
            navigation.navigate("Editor",item.id)
        }
        // console.log("helo item",item.title)
        return (            
                <TouchableOpacity onPress={()=>{nav_to_editor()}} className=" border-2 m-1 rounded-xl h-20 p-3 border-white "><Text>{item.title}</Text></TouchableOpacity>
        )
    }
    const navi = async () => {
        navigation.navigate("NoteScreen")
    }
    return (
        <ImageBackground source={require("../Notebook-rafiki.png")} resizeMode="contain" className="w-full h-full flex-1 bg-black">
            <View className="flex-1">
                <Top></Top>
                <View className="flex-1 flex-col">
                    <FlatList className="flex-1 h-full" data={data} renderItem={renderItem}></FlatList>
                        

                </View>
                <TouchableOpacity onPress={()=>{navi()}} className=" border-8 border-white absolute bottom-0 right-0 w-[70px] h-[70px] items-center justify-center bg-slate-900 rounded-full">
                            <Text className=" font-bold text-3xl">+</Text>
                        </TouchableOpacity>
            </View>
            

        </ImageBackground>
    )
}
export default Notes;