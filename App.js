import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator, CardAnimationContext} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Sidebar from './components/drawer';


 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    mode : 'modal',
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      title: 'Calculator',
      headerShown : 'false',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#34495e',
      },
      headerTintColor: '#1abc9c',
      gestureEnabled :true,
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
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
  //All the screen from the Screen3 will be indexed here
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
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
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
    },
    activeLabelStyle : {
    //  borderWidth : 3,

    }
  },
});
 
export default createAppContainer(DrawerNavigatorExample);