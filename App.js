import React, { Component, useEffect } from 'react';
import { View, Image, TouchableOpacity, Button, StyleSheet, ScrollView , Switch} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator, CardAnimationContext} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/sem2';
import Sidebar from './components/drawer';
import SplashScreen from 'react-native-splash-screen';


 
class NavigationDrawerStructure extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      test : "balck",
    }
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  componentDidMount() {
      SplashScreen.hide();
  } 
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 30, height: 30, marginLeft: 5,tintColor:'#1abc9c', }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
var test = "black";
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: props => <Screen1 {...props} screenProps={test}/>,
    mode : 'modal',
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      title: 'Semester I',
      headerShown : 'false',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      // headerRight: () => <Button onPress={}></Button>,
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTintColor: '#1abc9c',
      gestureEnabled :true,
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Reference',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTintColor: '#1abc9c',
      gestureEnabled :true,
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Feedback',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTintColor: '#1abc9c',
      gestureEnabled :true,
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Semester II',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTintColor: '#1abc9c',
      gestureEnabled :true,
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Semester I',
    },
  },
  Screen4:{
    screen : Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Semester II',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Reference',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Feedback',
    },
  },
  
},
// Drawer Navigator Config
{
  drawerType : 'slide',
  drawerBackgroundColor: '#34495e',
  contentComponent : Sidebar,
  contentOptions : {
    activeBackgroundColor : '#1abc9c',
    activeTintColor : '#2c3e50',
    inactiveTintColor : '#bdc3c7',
    itemsContainerStyle : {
      
    },
    itemStyle : {
      borderRadius : 50,
      borderWidth : 3,
      borderColor : '#1abc9c',
      marginTop : 10,
      marginRight : 10,
      marginLeft : 10,
    },
    activeLabelStyle : {
    //  borderWidth : 3,

    }
  },
});
const styles = StyleSheet.create({
  switch : {
    marginLeft : 260,
  }
})
 
export default createAppContainer(DrawerNavigatorExample);