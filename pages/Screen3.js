//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text , ScrollView, Image} from 'react-native';
// import all basic components
 
export default class Screen3 extends Component {
  //Screen3 Component
  render() {
    return (
      <ScrollView style={styles.MainContainer}>
        <View>
            <View style={styles.aboutmain}>
                <View style={styles.topcontainer}>
                {/* <ImageBackground source={{uri: 'https://i.ytimg.com/vi/oUIdZW1d-DU/maxresdefault.jpg'}} style={styles.image}> */}
                <Image source= {{uri : 'https://avatars1.githubusercontent.com/u/35602510?s=400&v=4'}} style={styles.image} ></Image>
                <View style={styles.textcontainer}>
                <Text style={styles.text}>Nishit Patel</Text>
                <Text style ={styles.descrip}>Developer</Text>
                </View>
                </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor : "#1abc9c",
  },
  topcontainer: {
    backgroundColor : '#34495e',
    borderBottomColor : '#2c3e50',
    // alignItems : 'center',
    // justifyContent : 'center',
  },
  aboutmain : {
    flex : 2,
    borderWidth : 3,
    height : 200,
    marginRight : 10,
    marginLeft : 10,
    marginTop : 100,
    borderTopEndRadius: 30,
    borderTopStartRadius : 30,
    backgroundColor : "#34495e",
    paddingBottom : "100%",
    alignItems : 'center',
    justifyContent : 'center',
    // paddingBottom : "90%",
    // marginBottom : 40,
  },
  image: {
    height : 125,
    width : 125,
    marginTop : 40,
    borderRadius :50,
    marginLeft : 20,
  },
  textcontainer : {
    flex:1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  text : {
    marginTop : 70,
    color : 'white',
    fontSize : 30,
   },
   descrip : {
    marginTop : 10,
    //  borderWidth : 3,
     color: "white",
   },
  conati : {
    flex : 5,
    // borderWidth : 3,
    borderRadius : 40,
    backgroundColor : "#34495e",
    height : 100,
    zIndex :1,
    marginLeft : 10,
  },
});