import { View, Text, TouchableOpacity, FlatList, ImageBackground, Appearance, StyleSheet } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TrashIcon from 'react-native-heroicons/mini/TrashIcon'
const Theme=Appearance.getColorScheme();
console.log(Theme)
const Home = ({navigation}) => {
    let [notecards,setnotecards]=useState();
    const fetchdata=async()=>{
        const object=await AsyncStorage.getItem("List");
        if(object)
        {
            setnotecards(JSON.parse(object));
        }
        // if (notecards){
            // var sortBy = (function () {
            //     var toString = Object.prototype.toString,
            //         // default parser function
            //         parse = function (x) { return x; },
            //         // gets the item to be sorted
            //         getItem = function (x) {
            //           var isObject = x != null && typeof x === "object";
            //           var isProp = isObject && this.prop in x;
            //           return this.parser(isProp ? x[this.prop] : x);
            //         };
                    
            //     /**
            //      * Sorts an array of elements.
            //      *
            //      * @param {Array} array: the collection to sort
            //      * @param {Object} cfg: the configuration options
            //      * @property {String}   cfg.prop: property name (if it is an Array of objects)
            //      * @property {Boolean}  cfg.desc: determines whether the sort is descending
            //      * @property {Function} cfg.parser: function to parse the items to expected type
            //      * @return {Array}
            //      */
            //     return function sortby (array, cfg) {
            //       if (!(array instanceof Array && array.length)) return [];
            //       if (toString.call(cfg) !== "[object Object]") cfg = {};
            //       if (typeof cfg.parser !== "function") cfg.parser = parse;
            //       cfg.desc = !!cfg.desc ? -1 : 1;
            //       return array.sort(function (a, b) {
            //         a = getItem.call(cfg, a);
            //         b = getItem.call(cfg, b);
            //         return cfg.desc * (a < b ? -1 : +(a > b));
            //       });
            //     };
                
            //   }());
            //   sortBy(notecards,{prop:"date",parser: function (item) {
            //     return new Date(item);
            // }})
            // console.log(sortBy(notecards,{prop:"date",parser: function (item) {
            //     return new Date(item);
            // }}),"zuhfus")
            // setnotecards(sortBy(notecards,{prop:"date",parser: function (item) {
            //     return new Date(item);
            // }}))
    
    }
    setTimeout(() => {
        let dates=[];
        
    }, 200);
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
    const renderItem=({item})=>{
        const nav_to_edit=()=>{
            navigation.navigate("Editor",{item})
        }
        return(
        <View className="mx-4 my-1 rounded-xl h-20 p-3 overflow-hidden bg-white dark:bg-neutral-900">
            <TouchableOpacity className="flex flex-row justify-between items-center" onPress={()=>{nav_to_edit()}} 
            >
                <View className="flex-col">
                <Text className="text-2xl dark:text-white">{item.title}</Text>
                <Text className="text-base dark:text-white">{item.content}</Text>
                </View>
                {/* <TrashIcon  fill="black"></TrashIcon> */}
            </TouchableOpacity>
        </View>
        )
    }
    const nav_addnotes=async()=>{
        navigation.navigate("NewNote")
    }  
  return (
    <ImageBackground source={require("../Notebook-rafiki.png")} resizeMode="contain" className="w-full h-full flex-1 bg-slate-200 dark:bg-black ">
        <View>
            <Text className="text-4xl m-5 text-slate-500 dark:text-white">Notes</Text>
        </View>
        <FlatList className="flex-1 h-full" data={notecards} renderItem={renderItem}></FlatList>
        <TouchableOpacity onPress={()=>{nav_addnotes()}}
        className="absolute bottom-0 right-0 w-[70px] h-[70px] bg-slate-100 rounded-full items-center justify-center m-2 dark:bg-zinc-900">
            <Text className="font-bold text-3xl text-slate-500 dark:text-white">+</Text>
        </TouchableOpacity>

    </ImageBackground>    
  )
}
export default Home;