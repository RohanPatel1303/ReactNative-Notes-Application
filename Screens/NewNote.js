import { View, Text, TextInput, TouchableOpacity, useColorScheme,KeyboardAvoidingView,ScrollView } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLeftIcon from 'react-native-heroicons/mini/ArrowLeftIcon';
import CheckIcon from 'react-native-heroicons/mini/CheckIcon'
import { Appearance } from 'react-native';
import uuid from "react-native-uuid"
const NewNote = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [content, setcontent] = useState("");
    const [colorscheme,setcolorscheme]=useState()
    useEffect(() => {
        setcolorscheme(Appearance.getColorScheme())
      }, [])
    Appearance.addChangeListener(({colorScheme})=>{
        colorSheme=Appearance.getColorScheme();
        setcolorscheme(colorScheme)
        console.log(colorScheme);
    })
    const BackButtonHandler=()=>{
        navigation.navigate("Home")
    }
    const Save=async()=>{
        const pdata=JSON.parse(await AsyncStorage.getItem("List"));
        const id=uuid.v4();
        const rgba="red"
        const date=new Date();
        const time=new Date().getTime();
        const data=[{title,content,id,rgba,date}]
        var newdata=[];
        if(pdata==null){
            await AsyncStorage.setItem("List",JSON.stringify(data));
        }
        else
        {
            newdata=[...pdata,{title,content,id,rgba,date,time}]
            await AsyncStorage.setItem("List",JSON.stringify(newdata))
        }
        BackButtonHandler();
    }
    return (
        <View className="flex-1 bg-slate-100  dark:bg-black">
            <View className="flex-row justify-between m-1">
                <TouchableOpacity onPress={()=>{BackButtonHandler()}}>
                    <ArrowLeftIcon fill={colorscheme=="light"?"black":"white"}></ArrowLeftIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Save()}}>
                    <CheckIcon fill={colorscheme=="light"?"black":"white"}></CheckIcon>
                </TouchableOpacity>
            </View>
            <ScrollView className="m-1">
                <TextInput className="text-2xl text-[#FFD300]" placeholder='Title' placeholderTextColor="#FFD300" onChangeText={newtitle=>{setTitle(newtitle)}}></TextInput>
                <TextInput className="text-black dark:text-white" placeholder='Content' placeholderTextColor={colorscheme=="light"?"black":"white"} multiline={true} onChangeText={newcontent=>{setcontent(newcontent)}}></TextInput>
            </ScrollView>
        </View>
    )
}

export default NewNote;