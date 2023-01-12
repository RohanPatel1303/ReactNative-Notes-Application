import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
const TopBackButton = ({navi}) => {
  // const navi=()=>{
  //   navigation.navigate("Notes")
  // }
  return (
    <View style={{padding:10, borderWidth:2,borderColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity onPress={navi}>
            <Text className="text-2xl text-white">{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{save()}}>
            <Text className="text-2xl text-white">Save</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TopBackButton