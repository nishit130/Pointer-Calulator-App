import React, { Component } from 'react';
import MyText from '../components/mytext';
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
      AMT:0,
      ED : 0,
      EEEE : 0,
      CS : 0,
      EC_lab : 0,
      ED_lab : 0,
      EEEE_lab : 0,
      Workshop : 0,
      display : 0,
      IAP : 0,
      button_display : {
        am_1 : props.sub1,
        eeee_2 : props.sub2,
        ec_3 : props.sub3,
        ed_4 : props.sub4,
        cs_5 : props.sub5,
        eclab_6 : props.sub6,
        eeeelab_7 : props.sub7,
        edlab_8 : props.sub8,
        workshop_9 : props.sub9,
        iap_0 : props.sub10,
        amt : props.sub11,
      },
      typer : "",
      current : "",
      text : "",
      styl : props.color,
      btbg : "#34495e",
      bg : "#34495e",
      btc: "white",
      isHidden : false,
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
            iap_0 : "0",
            amt : "",
          },
          isHidden : !(this.state.isHidden),
        }
      ))
    }
    else{
      save = this.state.current;
      if(this.state.display > 100 && save != "AMT" && save != "ED_lab" && save != "EEEE_lab" && save != "EC_lab" && save != "IAP")
      {
        this.setState({
          display: 0,
          typer: " ",
          text: "Enter Valid Marks",
        })
        this.counter = !this.counter
      }
      else if(this.state.display >25 && save == "AMT") {
        this.setState({
          display: 0,
          typer: " ",
          text: "Enter Valid Marks",
        })
        this.counter = !this.counter
      }
      else if(this.state.display >50 && (save == "ED_lab" || save == "EC_lab" || save == "EEEE_lab" || save == "IAP") ) {
        this.setState({
          display: 0,
          typer: " ",
          text: "Enter Valid Marks",
        })
        this.counter = !this.counter
      }
      else{
        this.setState((
          {
            button_display : {
              am_1 : this.props.sub1,
              eeee_2 : this.props.sub2,
              ec_3 : this.props.sub3,
              ed_4 : this.props.sub4,
              cs_5 : this.props.sub5,
              eclab_6 : this.props.sub6,
              eeeelab_7 : this.props.sub7,
              edlab_8 : this.props.sub8,
              workshop_9 : this.props.sub9,
              iap_0 : this.props.sub10,
              amt : this.props.sub11,
              },
            [save] : this.state.display,
            typer : "",
            text : "",
            isHidden : !(this.state.isHidden),
            isHiddendisplay : false,
          }
        ))
        if(this.state[save] != 0)
        {
          this.setState(({
            styl : "#34495e",
          }))
        }
      }
    }
    this.counter = !this.counter;
  }
  clear = () =>
  {
    this.setState({
      EC : 0,
      AM : 0,
      AMT : 0,
      ED : 0,
      EEEE : 0,
      CS : 0,
      EC_lab : 0,
      ED_lab : 0,
      EEEE_lab : 0,
      Workshop : 0,
      display : 0,
      text : "",
      typer : "",
      btc : this.props.color,
    })
    if(!isNaN(parseInt(this.state.button_display.am_1)))
    {
      this.change_button();
    }
  }
  press = (para,curr,param) => {
    if(isNaN(parseInt(this.state.button_display.am_1)))
    {
      this.setState((
        { 
          current : curr,
        }
      ))
      this.setState(previonsState => (
        { 
          display : previonsState[curr],
        }
      ))    
      this.change_button();
      if(para != this.props.sub11 && para != this.props.sub8 && para != this.props.sub6 && para != this.props.sub7 && para != this.props.sub9 && para != this.props.sub10)
      {
        this.setState((
          {
            text: `Enter the Total Marks out of 100 for ${para}`,
          }
        ))
      }
      else if(para == this.props.sub11)
      {
        this.setState((
          {
            text: `Enter the Total Marks out of 25 for ${para}`,
          }
        ))
      }
      else if(para == this.props.sub10 || para == this.props.sub9)
      {
        this.setState({
          text : `Enter the Total Marks out of 50 for ${para}`,
        })
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
    if(param>=85)
      return 10;
    else if(param>=75)
      return 9;
    else if(param>=70)
      return 8;
    else if(param>=60)
      return 7;
    else if(param>=50)
      return 6;
    else if(param>=45)
      return 5;
    else if(param>=40)
      return 4;
    else
      return 0;
  }
  calculate = () => {
    var pointers = {
      EC : (this.state.EC/100)*100,
      AM : (this.state.AM/100)*100,
      AMT : (this.state.AMT/25)*100,
      ED : (this.state.ED/100)*100,
      EEEE : (this.state.EEEE/100)*100,
      CS : (this.state.CS/100)*100,
      EC_lab : (this.state.EC_lab/50)*100,
      ED_lab : (this.state.ED_lab/50)*100,
      EEEE_lab : (this.state.EEEE_lab/50)*100,
      Workshop : (this.state.Workshop/50)*100,
      IAP : (this.state.IAP/50)*100,
    }
    if(isNaN(parseInt(this.props.sub10)))
    {
      var pointer = (this.pointercal(pointers.AM)*4 + (this.pointercal(pointers.AMT))*1 + this.pointercal(pointers.EC)*4 + this.pointercal(pointers.ED)*3 + this.pointercal(pointers.EEEE)*3 + this.pointercal(pointers.CS)*2 + this.pointercal(pointers.EC_lab) + this.pointercal(pointers.ED_lab) + this.pointercal(pointers.EEEE_lab) + this.pointercal(pointers.Workshop)*2)/22;
    }
    else{
     var pointer = (this.pointercal(pointers.AM)*4 + (this.pointercal(pointers.AMT))*1 + this.pointercal(pointers.EC)*4 + this.pointercal(pointers.ED)*3 + this.pointercal(pointers.EEEE)*3 + this.pointercal(pointers.CS)*2 + this.pointercal(pointers.EC_lab) + this.pointercal(pointers.ED_lab) + this.pointercal(pointers.EEEE_lab) + this.pointercal(pointers.Workshop)*2 + this.pointercal(pointers.IAP)*2)/24;
    }
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
      backgroundColor: this.state.btbg,
    }
    const viewstyles = {
      backgroundColor: this.state.bg,
    }
    const btstyles = {
      color : this.state.btc,
    }

    return (
      <View style={[styles.view,viewstyles]}>
      <View style={styles.alert}><Text></Text></View>
      <View style={[styles.view1,styles.alert]}>
        <Text style={styles.textview}>{this.state.display}</Text>
        <Text style={[styles.textviewmsg]}>{this.state.text}</Text>
      </View>
      <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub1,"AM","1")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.am_1}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.AM}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub2,"EEEE","2")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.eeee_2}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.EEEE}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => {this.press(this.props.sub3,"EC","3");}}><Text style={[styles.bt,btstyles]}>{this.state.button_display.ec_3}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.EC}</Text></MyText></TouchableOpacity>
            </View>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress= {() => this.press(this.props.sub4,"ED","4")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.ed_4}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.ED}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub5,"CS","5")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.cs_5}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.CS}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub6,"EC_lab","6")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.eclab_6}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.EC_lab}</Text></MyText></TouchableOpacity>
            </View>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub7,"EEEE_lab","7")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.eeeelab_7}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.EEEE_lab}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub8,"ED_lab","8")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.edlab_8}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.ED_lab}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub9,"Workshop","9")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.workshop_9}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.Workshop}</Text></MyText></TouchableOpacity>
            </View>
            <View style={styles.viewbt}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub11,"AMT")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.amt}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.AMT}</Text></MyText></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={() => this.press(this.props.sub10,"IAP","0")}><Text style={[styles.bt,btstyles]}>{this.state.button_display.iap_0}</Text><MyText hide={this.state.isHidden}><Text style={[styles.bt,btstyles]}>{this.state.IAP}</Text></MyText></TouchableOpacity>
            </View>
          </View>
          <View style={styles.view4}>
            <TouchableOpacity style={[styles.btnr,btnrstyles]} onPress={this.change_button}><Text style = {[styles.bt,btstyles]}>Enter</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles,styles.viewbtr]} onPress={this.calculate}><Text style = {[styles.bt,btstyles]}>Calculate</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnr,btnrstyles,styles.viewbtr]} onPress={this.clear}><Text style = {[styles.bt,btstyles]}>clear</Text></TouchableOpacity>
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
    // backgroundColor : "#1abc9c",
    // backgroundColor : 'black',
    justifyContent : 'center',
    alignItems : 'center',
  },
  view1 : {
    height: 150,
  },
  btd: {
    opacity : 0,
  },  
  textview : {
    height : 70,
    fontSize:30,
    width : 90,
    marginBottom: 15,
    fontWeight : "900",
    textAlign: "center",
    // color : '#2c3e50',
    // color : 'white',
  },
  textviewmsg : {
    height : 70,
    // color : '#2c3e50',
    // color : 'white',
    fontSize: 18,
    fontFamily : 'lucida grande',
    fontWeight :'bold',
    textAlign: "center",
  },
  alert : {
    zIndex : 20,
    borderWidth : 2,
    paddingBottom : 50,
    width : "95%",
    height : 65,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 40,
    backgroundColor : "white",
    borderColor : 'white',
    marginTop: 10,
    marginBottom : 10,
    fontSize:30,
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
    borderColor : "#2c3e50",
    // borderColor : 'white',
    alignItems: "center",
    justifyContent: "center",
  },
  viewbt : {
    flex: 1,
    borderTopWidth : 5,
    borderColor : "#2c3e50",
    // borderColor : 'white',
    flexDirection : "row",
  },
  viewbtr : {
    borderTopWidth : 5,
    borderColor : "#2c3e50",
    // borderColor : 'white',
  },
  bt: {
    // color : "#1abc9c",
    // color : 'white',
    fontSize: 15,
    fontWeight : 'bold',
  }
});
