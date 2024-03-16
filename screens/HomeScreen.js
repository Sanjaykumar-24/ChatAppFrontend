import React, { useContext } from 'react'
import {View,Text, Pressable, ImageBackground,StyleSheet,TouchableOpacity,Alert,Modal, KeyboardAvoidingView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/bg.jpg'
import { Context } from '../context/Context'
import {  TextInput } from 'react-native-gesture-handler';
export default function HomeScreen({navigation}) {
     const {showLoginView,setLoginView} = useContext(Context)
     const {registerModel,loginModel,setRegisterModel,setLoginModel,setUsername,setPassword} = useContext(Context)
     return (
            <View style={{flex:1,backgroundColor:'gray'}}>
            {
                showLoginView?
                <View style={{width:'100%',height:'10%',justifyContent:'flex-end',alignItems:'flex-start',marginLeft:'2%'}}>
                <TouchableOpacity onPress={()=>{
                if(!loginModel && !registerModel)
                {
                setLoginView(false)
                }
                 }}>
                <Ionicons name="arrow-back-outline" size={35} color="blue"/>
                </TouchableOpacity>
                </View>:<View></View>
            }

            {
                registerModel&&
                <View style={{width:'100%',height:'60%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'80%',height:'80%',backgroundColor:'white',borderRadius:20}}>
                <View style={{width:'100%',height:'30%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TextInput onChangeText={(e)=>{setUsername(e)}} placeholder='Username' style={{width:'85%',height:'50%',borderColor:'black',borderWidth:0.5,paddingLeft:'5%'}}/>
                </View>
                <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TextInput placeholder='Password' style={{width:'85%',height:'70%',borderColor:'black',borderWidth:0.5,paddingLeft:'5%'}}/>
                </View>
                <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}} style={{borderRadius:35,width:'50%',height:'70%',backgroundColor:'blue',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Text>Register</Text></TouchableOpacity>
                </View>
                <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{
                setUsername('');
                setPassword('');
                setRegisterModel(false)
                }} style={{borderRadius:35,width:'50%',height:'70%',backgroundColor:'blue',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Text>Cancel</Text></TouchableOpacity>
                </View>
                </View>
                </View>
            }

            {
                loginModel&&
                <View style={{width:'100%',height:'60%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'80%',height:'80%',backgroundColor:'white',borderRadius:20}}>
                <View style={{width:'100%',height:'30%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TextInput placeholder='Username' style={{width:'85%',height:'50%',borderColor:'black',borderWidth:0.5,paddingLeft:'5%'}}/>
                </View>
                <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TextInput placeholder='Password' style={{width:'85%',height:'70%',borderColor:'black',borderWidth:0.5,paddingLeft:'5%'}}/>
                </View>
                <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{borderRadius:35,width:'50%',height:'70%',backgroundColor:'blue',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Text>Login</Text></TouchableOpacity>
                </View>
                <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{
                    setUsername('');
                    setPassword('');
                    setLoginModel(false)
                }} style={{borderRadius:35,width:'50%',height:'70%',backgroundColor:'blue',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Text>Cancel</Text></TouchableOpacity>
                </View>
                </View>
                </View>
            }
            <View style={styles.firstpage}>
            {
                showLoginView?
                <View style={styles.pagebox}>
                <View style={styles.loginbox}>
                <TouchableOpacity style={styles.register} onPress={()=>{
                    if(!loginModel)
                    {
                        setRegisterModel(true)
                    }
                }}>
                <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login} onPress={()=>{
                if(!registerModel)
                {
                setLoginModel(true)
                }
            }}>
                <Text>Login</Text>
                </TouchableOpacity>
                </View>
                </View>
                :
                <View style={styles.pagebox}>
                <TouchableOpacity style={styles.startButton} onPress={()=>{setLoginView(true)}}>
                <Text>Get Started..!!</Text>
                </TouchableOpacity>
                </View>
            }
            </View>
            </View>
         )
}

const styles = StyleSheet.create({
    startButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        width:'45%',
        height:'30%',
        borderRadius:150
    },
    firstpage:{
        width:'100%',
        height:'30%',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        bottom:0,
        position:'absolute'
    },
    pagebox:{
        width:'100%',
        height:'80%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    loginbox:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    register:{
        backgroundColor:'blue',
        width:'42%',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150,
    },
    login:{
        backgroundColor:'blue',
        width:'42%',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150
    }
})