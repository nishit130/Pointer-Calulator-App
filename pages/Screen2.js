import React, { Component } from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import Pdf from 'react-native-pdf';

export default class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.pdf = null;
  }

  render() {
    let yourPDFURI = {uri:'bundle-assets://pdf/practice_problem.pdf', cache: true};

    return <View style={{flex: 1}}>
      <Pdf ref={(pdf)=>{this.pdf = pdf;}}
        source={yourPDFURI}
        style={{flex: 1}}
        onError={(error)=>{console.log(error);}} />
    </View>
  }
}