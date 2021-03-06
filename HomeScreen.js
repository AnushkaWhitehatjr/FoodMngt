import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Button,Dimensions,BackgroundColor } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from "./Login"
import SignUp from "./SignUp"
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
//import AsyncStorage from '@react-native-community/async-storage';
//import BackgroundColor from 'react-native-background-color';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height


export default class HomeScreen extends React.Component 
{
  //componentDidMount() {
    //BackgroundColor. setColor('#BB6BDA');
   // }
    
  render()
  {
  return (
    <SafeAreaProvider>
      <View style={styles.view1}>
    <View>
    <Header backgroundColor='#6633ff'
     leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={{ text: 'FOOD DONATION APP', style: { color: 'white' } }}
      rightComponent={{ icon: 'home', color: 'white' }}
    />
    <Text style={styles.t}> Start Today!</Text>
      <Image  style={styles.img}
      source={require('./food-rebg.png')}           />

      <TouchableOpacity style={styles.btn} 
      onPress={()=>this.props.navigation.navigate("LoginScreen")}>
      <Text style={{color:"white", fontSize:"25px"}}>LOGIN</Text>
      </TouchableOpacity >


      <TouchableOpacity style={styles.btn}  
      onPress={()=>this.props.navigation.navigate('SignupScreen')}>
      <Text style={{color:"white", fontSize:"25px"}}>SIGN UP</Text>
      </TouchableOpacity >

      

      </View>
         
          </View>
          </SafeAreaProvider>
        );
      }
      }


const styles = StyleSheet.create({
 img:{
   width:500,
   height:250,
   marginLeft: 430,
   marginTop: 40
   //justifyContent:"center",
   //alignItems:"center",
   //alignSelf:"center",
   //marginLeft:Dimensions.get('window').width/2
 },
 t:{
   justifyContent:"center",
   marginTop: 40,
   alignItems:"center",
   alignSelf:"center",
   color:"blue",
   fontWeight: "bold",
   fontSize: 35
 },
 btn:{
    marginTop:25,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    width:150,
    height:50,
    //marginLeft: 610,
    marginLeft:Dimensions.get('window').width/2
    
 },
 view1:{
   backgroundColor:"lightblue",
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width,
   //width:windowW,
   //height:windowH,
   //width:"100vh",
   //height:"100vh"
   //<Text style={{marginLeft:Dimensions.get('window').width/2}}>New User! Sign Up</Text>
   //<Text style={{ marginLeft:Dimensions.get('window').width/2}}>Already a user! Log In</Text>
 }
});
