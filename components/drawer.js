import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import {StyleSheet,View, Text, ScrollView,Image} from 'react-native';
import React, { Component } from 'react';
import { withOrientation } from 'react-navigation';

const Sidebar = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
    <View style = {{backgroundColor : '#E74292'}}>
    <View style={styles.topcontainer}>
    {/* <ImageBackground source={{uri: 'https://i.ytimg.com/vi/oUIdZW1d-DU/maxresdefault.jpg'}} style={styles.image}> */}
    <Image source= {{uri : 'https://avatars1.githubusercontent.com/u/35602510?s=400&v=4'}} style={styles.image} ></Image>
    <View style={styles.textcontainer}>
    <Text style ={styles.descrip}>Developer</Text>
    <Text style={styles.text}>Nishit Patel</Text>
    </View>
    </View>
    {/* </ImageBackground>   */}
    </View>
    <DrawerItems {...props} />
      {/* <View style = {styles.bottom}>
        <Text style= {styles.credit}>Developed By Nishit Patel</Text>
      </View> */}
    </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topcontainer: {
    flex : 1,
    flexDirection : "row",
    width : '100%',
    height : 150,
    backgroundColor : '#34495e',
    borderBottomWidth : 5,
    borderBottomColor : '#2c3e50',
    // alignItems : 'center',
    // justifyContent : 'center',
  },
  image: {
    height : 70,
    width : 70,
    marginTop : 40,
    borderRadius :50,
    marginLeft : 20,
  },
  textcontainer:{
    flex : 1,
    // borderWidth : 3,
    marginTop : 50,
    marginLeft : 20,
    marginBottom : 0,
   }, 
   text : {
    color : 'white',
    fontSize : 30,
   },
   descrip : {
    //  borderWidth : 3,
     color: "white",
   }
});
export default Sidebar;