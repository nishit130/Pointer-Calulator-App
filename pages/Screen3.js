//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Image, TextInput, Button, KeyboardAvoidingView, Alert} from 'react-native';
// import all basic components
 
export default class Screen3 extends Component {
  constructor(props){
    super(props)
    this.state = {
    text: 'Name',
    feedback : 'Write your review..',
    bolean : true,
    boleanf : false,
    off : 10,
  }
}
  render() {
    return (
      <KeyboardAvoidingView behavior='height' enabled={this.state.boleanf} style={{flex:1,}}>
      <View style={styles.mainview}>
      <View style={styles.MainContainer}>
        <View style={styles.name}>
          <Text style={{marginBottom : 10,fontSize:20,fontWeight:"bold"}}>Name </Text>
          <TextInput
            selectTextOnFocus={this.state.bolean}
            style={styles.textcontainer}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.review}>
          <Text style={{marginBottom :10,marginTop:10,fontSize:20,fontWeight:"bold"}}> Feedback </Text>
          <TextInput
            selectTextOnFocus={this.state.bolean}
            multiline={this.state.bolean}
            textAlignVertical = "top"
            style={styles.rewcontainer}
            onChangeText={feedback => this.setState({feedback})}
            value={this.state.feedback}
          />
        </View>
        <View style={{flex:2,margin:10,}}>
        <Button
          color="#34495e"
          title="Sumbit"
          onPress={() => Alert.alert("","Thank You for your valuable feedback :)")}
        />
        <Text style={styles.quoteu}>“We all need people who will give us feedback. That’s how we improve.”</Text>
        <Text style={styles.quoted}>-Bill Gates</Text>
        
        </View>
      </View>
      </View>
      </KeyboardAvoidingView>
    )
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    borderWidth :2,
    backgroundColor : '#1abc9c',
  },
  mainview : {
    flex :1,
  },
  name: {
    flex :1,
    margin : 10,
    fontSize :40,
    marginTop : 20,
    backgroundColor : '#1abc9c'
  },
  review: {
    flex :4,
    backgroundColor : '#1abc9c',
    margin : 10,
  },
  Text : {
    fontSize : 40,
  },
  rewcontainer : {
     height : 200,
     borderWidth : 2,
     fontSize:15,
     textAlign : "justify",
     backgroundColor : "#34495e",
     color : 'white',
  },
  quoteu: {
    textAlign:"center",
    fontStyle: "italic",
    marginTop : 20,
  },
  quoted: {
    textAlign:"right",
    fontStyle: "italic",
  },
  textcontainer : {
    backgroundColor:  "#34495e",
    color : 'white',
    fontSize:15,
    borderWidth : 2,
  },
});