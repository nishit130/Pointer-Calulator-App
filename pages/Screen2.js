import React, { Component } from 'react';
import { StyleSheet, View, Text, Linking, ScrollView } from 'react-native';
import Pdf from 'react-native-pdf';

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.pdf = null;
  }

  render() {
    let yourPDFURI = {uri:'bundle-assets://pdf/exam_rules.pdf.pdf', cache: true};

    return (
    <View style={{flex: 1}}>
      <Pdf ref={(pdf)=>{this.pdf = pdf;}}
        source={yourPDFURI}
        style={{flex: 1}}
        onError={(error)=>{console.log(error);}} />
        <Text style= {{backgroundColor: 'red',color: 'white',}}>Note: formula and other Information is taken from this Document</Text>

    </View>

    );
  }
}