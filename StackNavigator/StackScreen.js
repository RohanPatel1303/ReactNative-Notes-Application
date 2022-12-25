import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notes from "../Screens/Notes";
import Home from "../Screens/Home";
import Editor from "../Screens/Editor";
import { NavigationContainer } from "@react-navigation/native";
import CreateNote from "../Screens/CreateNote";
const StackScreen=()=>{
    const Stack=createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
                {/* <Stack.Screen component={Home} name="Home"></Stack.Screen> */}
                <Stack.Screen component={Notes} name="Notes"></Stack.Screen>
                <Stack.Screen component={Editor} name="Editor"></Stack.Screen>
                <Stack.Screen component={CreateNote} name="NoteScreen"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackScreen;