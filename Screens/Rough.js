<ImageBackground source={require("../Notebook-rafiki.png")} resizeMode="contain" className=" w-full h-full flex-row flex-1 bg-black" >
            <View className="flex-1">
            <Top>
            </Top>
            {/* <View className=" border-green-300  flex-row border-2 m-2 ">
                <TouchableOpacity onPress={() => { navi(); }} className="flex-1 border-2 w-1/3 items-center m-4 p-4  rounded-2xl  justify-center border-lime-400"><Text className="text-white text-4xl">+</Text></TouchableOpacity>
                <FlatList data={data} renderItem={renderItem}></FlatList>
            </View> */}
            <FlatList className="flex-1" data={data} renderItem={renderItem}></FlatList>

            <View className=" border-3 border-white ">
                <TouchableOpacity className="bg-cyan-500 shadow-cyan-50/25 rounded-full border-4 absolute bottom-0 right-0 m-11 w-[70px] h-[70px] items-center justify-center "  onPress={() => { navi() }}><Text className=" text-5xl">+</Text></TouchableOpacity>


            </View>

            </View>

         </ImageBackground>