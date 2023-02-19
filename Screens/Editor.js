import { View, Text, TouchableOpacity,FlatList, TextInput, Modal, Alert } from 'react-native'
import { useState,useEffect } from 'react'
import React from 'react'
import { Appearance } from 'react-native'
import ArrowLeftIcon from 'react-native-heroicons/mini/ArrowLeftIcon'
import CheckIcon from 'react-native-heroicons/mini/CheckIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TrashIcon from 'react-native-heroicons/mini/TrashIcon'
import { Menu } from 'react-native-material-menu'
import { MenuItem } from 'react-native-material-menu/dist/MenuItem'
import EllipsisVerticalIcon from 'react-native-heroicons/outline/EllipsisVerticalIcon'
const Editor = ({ navigation, route }) => {
  const data=route.params.item;
  const id_to_change=data.id;
  const [title,settitle]=useState(data.title);
  const [content,setcontent]=useState(data.content);
  const [colorscheme, setcolorscheme] = useState()
  const [olddata,setolddata]=useState();
  const [menuvisible,setmenuvisible]=useState();
  const [savemodal,setsavemodal]=useState(false);
  const [modified,setmodified]=useState(false);
  useEffect(() => {
    setcolorscheme(Appearance.getColorScheme())
  }, [])
  setTimeout(() => {
    const fetchdata=async ()=>{
      setolddata(JSON.parse(await AsyncStorage.getItem("List")))
      // console.log(olddata)
    }
    fetchdata();
  }, 200);
  const SaveNote=async()=>{
    olddata.forEach(async element => {
      const date=new Date();
      const time=new Date().getTime();
      console.log(element)
      if(element.id===id_to_change)
      {
        element.title=title
        element.content=content;
        element.date=date;
        element.time=time;
        await AsyncStorage.setItem("List",JSON.stringify(olddata));
      }
    });
    navigation.navigate("Home")
  }
  const DeleteNote=async()=>{
    let index=olddata.findIndex(
      i=>i.id==id_to_change
    )
    console.log(index);
    olddata.splice(index,1);
    console.log(olddata);
    await AsyncStorage.setItem("List",JSON.stringify(olddata));
    navigation.navigate("Home")
  }
  Appearance.addChangeListener(({ colorScheme }) => {
    colorSheme = Appearance.getColorScheme();
    setcolorscheme(colorScheme)
    console.log(colorScheme);
  })
  const BackButtonHandler = () => {
    if(modified){
      Alert.alert(
        "",
        "Do you wish to save your changes?",
        [
          {
            text:"Save",
            onPress:()=>{SaveNote()}
            
          },
          {
            text:"Don't Save",
            onPress:()=>{
             navigation.navigate("Home");
            }
          }
        ]
      )
    }else{
      navigation.navigate("Home")
    }
    
  }
  const renderItem=({item})=>{
    return(
      <View className="m-3">
        <TextInput defaultValue={title} className="text-2xl text-[#FFD300]" onChangeText={newtext=>{settitle(newtext),setmodified(true)}}></TextInput>
        <TextInput defaultValue={content} className="text-black dark:text-white" multiline={true} onChangeText={newtext=>{setcontent(newtext),setmodified(true)}}></TextInput>

      </View>
    )
  }
  const alertsave=()=>{
    setmenuvisible(false);
    console.log("arigato")
    Alert.alert(
      'Do You Want To Save Your Changes',
      'This Action Is Irreversible',
      [
        {
          text:"Save",
          onPress:()=>{SaveNote()}
        },
        {
          text:"Cancel",
          style:'cancel'
        }
      ],
      {
        cancelable:true
      }
    )
  }
  const alertdelete=()=>{
    Alert.alert(
      'Do you wish to delete this note?',
      'Note: You will not be able to revert the changes',
      [
        {
          text:"Delete",
          onPress:()=>{DeleteNote()}
        },
        {
          text:"Cancel",
          style:'cancel'
        }
      ],
      {
        cancelable:true
      }
    )
  }
  return (
    <View className="flex-1 bg-white dark:bg-black">
      <View className="flex-row justify-between m-1">
        <TouchableOpacity onPress={() => { BackButtonHandler() }}>
          <ArrowLeftIcon fill={colorscheme == "light" ? "black" : "white"}></ArrowLeftIcon>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>{DeleteNote()}}>
          <TrashIcon fill={colorscheme=="light"?"black":"white"}></TrashIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{SaveNote()}}>
          <CheckIcon fill={colorscheme == "light" ? "black" : "white"}></CheckIcon>
        </TouchableOpacity> */}
        <Menu visible={menuvisible} anchor={<EllipsisVerticalIcon onPress={()=>{setmenuvisible(!menuvisible)}} fill={colorscheme == "light" ? "black" : "white"}></EllipsisVerticalIcon>} onRequestClose={()=>{setmenuvisible(!menuvisible)}}>
          <MenuItem onPress={()=>{alertsave()}}><Text className="text-black dark:text-white">Save</Text></MenuItem>
          <MenuItem onPress={()=>{alertdelete()}}><Text className="text-black dark:text-white">Delete</Text></MenuItem>
        </Menu>
      </View>
      <FlatList data={[data]} renderItem={renderItem}></FlatList>
 

    </View>
  )
}

export default Editor;