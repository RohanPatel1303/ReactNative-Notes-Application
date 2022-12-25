import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
const NoteSticker=()=>{
    return(
        <View className="border-2 flex-1 m-4 p-4 border-white rounded-xl ">
            <TouchableOpacity>
                <Text className="text-white text-[34px]">Title</Text>
                <Text className="text-white text-[14px]">contents</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NoteSticker;