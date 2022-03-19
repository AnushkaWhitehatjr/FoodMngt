import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,TextInput,Alert } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase  from 'firebase';
class Signup extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            nameError:""
          }
        }
signUpMethod = async() => {
    <Text style={{ color: "red" }}>{this.state.nameError}</Text>
    var e=this.state.email
    var p=this.state.password
    if (this.state.email.trim() === ""){
        this.setState({
        nameError:"email id is required"
      });
      }
      else if(this.state.password.trim() ==="") {
      this.setState({
        nameError:"pwd is required"
      });
        } 
        else if (this.state.email.trim()!=="" && this.state.password.trim()!=="") {
            await firebase.
            auth()
            .createUserWithEmailAndPassword(e.trim(), p.trim())
            .then((cred)=>{
                console.log(cred)
                alert("signup successfully")
                this.props.navigation.navigate("LoginScreen")
            }
            )
            .catch(function(error){
                console.log(error.message)
                alert(error.message)
            })
        }
        else {
            this.setState({
              nameError:null
            });
            console.log(error.message)
              }

}
render(){
  return(
    <SafeAreaProvider>
    <View style={styles.view1}>
        <Header  backgroundColor='#6633ff'
     leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={{ text: 'FOOD', style: { color: 'white' } }}
      rightComponent={{ icon: 'home', color: 'white' }}
    />
    <Text style={styles.t}>Create Your Account</Text>
    <TextInput 
    style={styles.input}
    placeholder="EMAIL ID"
    placeholderTextColor={"#A345J"}
    onChangeText={e=>this.setState({email:e})}
    />
    <TextInput 
    style={styles.input1}
    placeholder="PASSWORD"
    placeholderTextColor={"#A345J"}
    onChangeText={e=>this.setState({password:e})}
    />
    <TouchableOpacity style={styles.button} >
       <Text style={styles.buttonText}
        onPress={()=>this.signUpMethod()}>
          SIGN UP</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  )
}

}
const styles = StyleSheet.create({
  view1:{
    flex:1,
    backgroundColor: "lightblue"
  },
  buttonText : {
    textAlign : 'center',
    color : 'white',
    fontWeight: "bold",
    fontSize: 30
  },
  input: {
    height: 40,
    width: 600,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    marginTop:50,
    marginLeft: 380
  },
  input1: {
    height: 40,
    width: 600,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    marginTop:10,
    marginLeft: 380
  },
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
    backgroundColor:"#2196F3"
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
});

export default Signup
