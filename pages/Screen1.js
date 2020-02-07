import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PointerCalculator from './claculator';
 
export default class Screen1 extends Component {
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
        />
        // <PointerCalculator
        // sub1 = "AM II"
        // sub2 = "EM"
        // sub3 = "EP"
        // sub4 = "PIC"
        // sub5 = "EVS"
        // sub6 = "EP Lab"
        // sub7 = "EM Lab"
        // sub8 = "PIC Lab"
        // sub9 = "Workshop II"
        // sub10 = "IAP"
        // />
    );
  }
}