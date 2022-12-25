import React from "react";
import { View,SafeAreaView,Text } from "react-native";
import UserCircleIcon from "react-native-heroicons/mini/UserCircleIcon";
const Top=()=>{
    return(
        <View className="w-full h-20 text-white bg-black">
            <View className="flex-row justify-between flex-1 items-center">
                <Text className="text-white text-4xl m-5">Notes</Text>
                {/* <UserCircleIcon className="justify-end" color="white" size={50}></UserCircleIcon> */}

            </View>
            
            
        </View>
    )
}
export default Top;