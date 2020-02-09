import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PointerCalculator from './claculator';
 
export default class Screen1 extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
        <PointerCalculator
        sub1 = "AM I"
        sub2 = "EEEE"
        sub3 = "EC"
        sub4 = "ED"
        sub5 = "CS"
        sub6 = "EC Lab"
        sub7 = "EEEE Lab"
        sub8 = "ED Lab"
        sub9 = "Workshop"
        sub10 = ""
        sub11 = "AM Tutorials"
        color = {this.props.screenProps}
        />
    );
  }
}