import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home";
import NewNote from "../Screens/NewNote";
import Editor from "../Screens/Editor";
const RootNavigator=()=>{
    const Stack=createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen component={Home} name="Home"></Stack.Screen>
                <Stack.Screen component={NewNote} name="NewNote"></Stack.Screen>
                <Stack.Screen component={Editor} name="Editor"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default RootNavigator;
