//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text , TextInput,Button} from 'react-native';
// import all basic components
 
export default class Screen3 extends Component {
  constructor(props){
    super(props)
    this.state = {
    text: 'Name',
    feedback : 'Write your review..'
  }
}
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.name}>
          <Text style={{marginBottom : 10,}}>Name: </Text>
          <TextInput
            style={styles.textcontainer}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.review}>
          <Text>Review: </Text>
          <TextInput
            style={styles.rewcontainer}
            onChangeText={feedback => this.setState({feedback})}
            value={this.state.feedback}
          />
        </View>
        <View>
        <Button
          title="Sumbit"
          onPress={() => alert('Thank You for your valuable feedback :)')}
        />
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    borderWidth :2,
    margin : 10,
    backgroundColor : "#34495e",
  },
  name: {
    flex :2,
    marginTop : 20,
    fontSize :40,
    backgroundColor : '#1abc9c',
  },
  review: {
    flex :8,
    backgroundColor : '#1abc9c',
  },
  Text : {
    fontSize : 40,
  },
  rewcontainer : {
     height : 100,
     borderWidth : 2,
     textAlign : "justify",
     backgroundColor : "#34495e",
     color : 'white',
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
    backgroundColor:  "#34495e",
    color : 'white',
    borderWidth : 2,
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