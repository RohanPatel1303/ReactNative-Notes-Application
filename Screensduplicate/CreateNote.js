import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid"
const CreateNote = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [content, setcontent] = useState("");
    const SaveNote = async () => {
        const red=Math.floor(Math.random()*256)
        const green=Math.floor(Math.random()*265)
        const blue=Math.floor(Math.random()*265)
        const rgba=`rgb(${red},${blue},${green})`
        const pdata=JSON.parse(await AsyncStorage.getItem("List"));
        const id=uuid.v4()
        console.log(id)
        const data=[{title,content,id,rgba}]
        var newdata=[];
        if(pdata==null){
            await AsyncStorage.setItem("List",JSON.stringify(data));
        }
        else{
            newdata=[...pdata,{title,content,id,rgba}];
            await AsyncStorage.setItem("List",JSON.stringify(newdata));
        }
    }
    return (
        <View className="flex-1">
            <View className="flex-row justify-between">
                <TextInput onChangeText={newtitle => { setTitle(newtitle), console.log(title) }} className="text-lg" placeholder="Title" placeholderTextColor={"black"}></TextInput>
                <TouchableOpacity onPress={() => { SaveNote() }} className="flex"><Text className=" text-lg m-2">Save</Text></TouchableOpacity>
            </View>
            <TextInput onChangeText={newcontent => { setcontent(newcontent) }} textAlignVertical="top" className="flex-1 px-0  text-white" placeholder="Start Creating Your ideas" multiline={true}></TextInput>
        </View>
    )
}
export default CreateNote;