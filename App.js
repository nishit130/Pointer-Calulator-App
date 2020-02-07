import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator, CardAnimationContext} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/sem2';
import Sidebar from './components/drawer';


 
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
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
 
export default createAppContainer(DrawerNavigatorExample);