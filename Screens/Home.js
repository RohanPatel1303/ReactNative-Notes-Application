import { View, Text, TouchableOpacity, FlatList, ImageBackground, Appearance, StyleSheet } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Theme=Appearance.getColorScheme();
console.log(Theme)
const Home = ({navigation}) => {
    let [notecards,setnotecards]=useState();
    const fetchdata=async()=>{
        const object=await AsyncStorage.getItem("List");
        setnotecards(JSON.parse(object));
    }
    useEffect(() => {
      fetchdata();      
    }, [])
    useEffect(()=>{
        const focushandler=navigation.addListener('focus',()=>{
            fetchdata();
        })
        return()=>{
            focushandler();
        }
    },[navigation])
    
  return (
    <ImageBackground source={require("../Notebook-rafiki.png")} resizeMode="contain" className="w-full h-full flex-1 bg-yellow-100 dark:bg-black ">
        <View className="flex-1">
            <Text className="text-4xl m-5 text-slate-500 dark:text-white">Notes</Text>

        </View>
        <TouchableOpacity onPress={()=>{nav_addnotes()}}
        className="absolute bottom-0 right-0 w-[70px] h-[70px] bg-yellow-200 rounded-full items-center justify-center m-2 dark:bg-zinc-900">
            <Text className="font-bold text-3xl text-slate-500 dark:text-white">+</Text>
        </TouchableOpacity>

    </ImageBackground>    
  )
}
export default Home;