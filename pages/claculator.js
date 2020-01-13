import React, { Component } from 'react';
import 
{ 
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class pointerCalculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      EC : 0,
      AM : 0,
      ED : 0,
      EEEE : 0,
      CS : 0,
      EC_lab : 0,
      ED_lab : 0,
      EEEE_lab : 0,
      Workshop : 0,
      display : 0,
      button_display : {
        am_1 : "AM",
        eeee_2 : "EEEEE",
        ec_3 : "EC",
        ed_4 : "ED",
        cs_5 : "CS",
        eclab_6 : "EC Lab",
        eeeelab_7 : "EEEE Lab",
        edlab_8 : "ED Lab",
        workshop_9 : "Workshop",
      },
      typer : "",
      current : "",
      text : "hello",
      styl : "black",
    }
   }
  counter = true;
  change_button = () => {
    let save = "";
    if(this.counter)
    {
      this.setState((
        {
          button_display : {
            am_1 : "1",
            eeee_2 : "2",
            ec_3 : "3",
            ed_4 : "4",
            cs_5 : "5",
            eclab_6 : "6",
            eeeelab_7 : "7",
            edlab_8 : "8",
            workshop_9 : "9",
          }
        }
      ))
    }
    else{
      save = this.state.current;
      this.setState((
        {
          button_display : {
            am_1 : "AM",
            eeee_2 : "EEEEE",
            ec_3 : "EC",
            ed_4 : "ED",
            cs_5 : "CS",
            eclab_6 : "EC Lab",
            eeeelab_7 : "EEEE Lab",
            edlab_8 : "ED Lab",
            workshop_9 : "Workshop",
          },
          [save] : this.state.display,
          typer : "",
        }
      ))
      if(this.state[save] != 0)
      {
        this.setState(({
          styl : "black",
        }))
      }
    }
    this.counter = !this.counter;
  }
  press = (para,param) => {
    if(isNaN(parseInt(this.state.button_display.am_1)))
    {
      this.setState((
        { 
          current : para,
        }
      ))
      this.setState(previonsState => (
        { 
          display : previonsState[para],
        }
      ))    
      this.change_button();
      if(para != "AM" && para != "ED_lab" && para != "EC_lab" && para != "EEEE_lab" && para != "Workshop")
      {
        this.setState((
          {
            text: `Enter the Total Marks out of 100 for ${para}`,
          }
        ))
      }
      else if(para == "AM")
      {
        this.setState((
          {
            text: `Enter the Total Marks out of 125 (100 Theorey + 25 Tutorials) for ${para}`,
          }
        ))
      }
      else{
        this.setState((
          {
            text: `Enter the Total Marks out of 50 (25 oral + 25 Lab) for ${para}`,
          }
        ))
      }
    }
    else{
      this.setState((
        {
          typer : this.state.typer + param,
        }
      ))
      setTimeout(() =>{
        this.setState((
          {
            display : this.state.typer,
          }
        ))
      },20);
    } 
  }
  pointercal = (param) => {
    if(param>85)
      return 10;
    else if(param>75)
      return 9;
    else if(param>70)
      return 8;
    else if(param>65)
      return 7;
    else if(param>60)
      return 6;
    else if(param>50)
      return 5;
    else
      return 0;
  }
  calculate = () => {
    let pointers = {
      EC : (this.state.EC/100)*100,
      AM : (this.state.AM/125)*100,
      ED : (this.state.ED/100)*100,
      EEEE : (this.state.EEEE/100)*100,
      CS : (this.state.CS/100)*100,
      EC_lab : (this.state.EC_lab/50)*100,
      ED_lab : (this.state.ED_lab/50)*100,
      EEEE_lab : (this.state.EEEE_lab/50)*100,
      Workshop : (this.state.Workshop/50)*100,
    }
    let pointer = (this.pointercal(pointers.AM)*5 + this.pointercal(pointers.EC)*4 + this.pointercal(pointers.ED)*3 + this.pointercal(pointers.EEEE)*3 + this.pointercal(pointers.CS)*2 + this.pointercal(pointers.EC_lab) + this.pointercal(pointers.ED_lab) + this.pointercal(pointers.EEEE_lab) + this.pointercal(pointers.Workshop)*2)/22;
    this.setState((
      {
        text : `Your Pointer is ${pointer.toFixed(2)}`, 
      }
    )) 
  }
  render() {
    const btnrstyles = {
      flex: 8,
      borderRightWidth: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: this.state.styl,
    }
    return (
      <View style={styles.view}>
      <View style={styles.view1}>
        <Text style={styles.textview}>{this.state.display}</Text>
        <Text style={styles.textviewmsg}>{this.state.text}</Text>
      </View>
      <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("AM","1")}><Text style={styles.bt}>{this.state.button_display.am_1}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("EEEE","2")}><Text style={styles.bt}>{this.state.button_display.eeee_2}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => {this.press("EC","3");}}><Text style={styles.bt}>{this.state.button_display.ec_3}</Text></TouchableOpacity>
            </View>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress= {() => this.press("ED","4")}><Text style={styles.bt}>{this.state.button_display.ed_4}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("CS","5")}><Text style={styles.bt}>{this.state.button_display.cs_5}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("EC_lab","6")}><Text style={styles.bt}>{this.state.button_display.eclab_6}</Text></TouchableOpacity>
            </View>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("EEEE_lab","7")}><Text style={styles.bt}>{this.state.button_display.eeeelab_7}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("ED_lab","8")}><Text style={styles.bt}>{this.state.button_display.edlab_8}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("Workshop","9")}><Text style={styles.bt}>{this.state.button_display.workshop_9}</Text></TouchableOpacity>
            </View>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press("","0")}><Text style={styles.bt}>0</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.view4}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={this.change_button}><Text style = {styles.bt}>Enter</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={this.calculate}><Text style = {styles.bt}>Calculate</Text></TouchableOpacity>
          </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex:1,
    flexDirection: 'column',
  },
  view1 : {
    height: 150,
  },
  textview : {
    height : 70,
    marginTop: 5,
    fontSize:30,
    textAlign: "center",
  },
  textviewmsg : {
    height : 70,
    textAlign: "center",
  },
  view2 : {
    flex: 1,
    height: 100,
    flexDirection: 'row',
  },
  view3 : {
    flex: 3,
  },
  view4 : {
    flex: 1,
  },
  btnr:{
    flex: 8,
    borderRightWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  viewbt : {
    flex: 1,
    borderTopWidth : 5,
    flexDirection : "row",
  },
  bt: {
    color : "white",
    fontSize: 15,
  }
});
