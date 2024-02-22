import React, { useContext } from 'react'
import {View,Text, Pressable, ImageBackground,StyleSheet,TouchableOpacity,Alert,Modal, KeyboardAvoidingView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/bg.jpg'
import { Context } from '../context/Context'
import {  TextInput } from 'react-native-gesture-handler';
export default function HomeScreen({navigation}) {
     const {showLoginView,setLoginView} = useContext(Context)
     const {registerModel,loginModel,setRegisterModel,setLoginModel} = useContext(Context)
     return (
            <ImageBackground source={bg} style={{flex:1}}>
            <Modal transparent={true} visible={registerModel}  onRequestClose={()=>{setRegisterModel(false)}}>
            <View style={{flex:1}}>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'80%'}}>
            <View style={styles.registerForm}>
            <View style={{width:'100%',height:'30%',marginTop:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TextInput style={{height:'40%',width:'85%',borderWidth:0.5,paddingLeft:10}}/>
            </View>
            <View style={{width:'100%',height:'30%',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
            <TextInput style={{height:'40%',width:'85%',borderWidth:0.5,paddingLeft:10}}/>
            </View>
            <View style={{width:'100%',height:'30%',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>{
            navigation.navigate('Chat')
            setRegisterModel(false)      
        }} style={{width:'40%',backgroundColor:'blue',height:'35%',flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text>Register..!!</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </View>
            </Modal>
            <Modal transparent={true} visible={loginModel}  onRequestClose={()=>{setLoginModel(false)}}>
            <View style={{flex:1}}>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',height:'80%'}}>
            <View style={styles.registerForm}>
            <View style={{width:'100%',height:'30%',marginTop:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TextInput style={{height:'40%',width:'85%',borderWidth:0.5,paddingLeft:10}}/>
            </View>
            <View style={{width:'100%',height:'30%',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
            <TextInput style={{height:'40%',width:'85%',borderWidth:0.5,paddingLeft:10}}/>
            </View>
            <View style={{width:'100%',height:'30%',flexDirection:'row',alignItems:'flex-start',justifyContent:'center'}}>
            <TouchableOpacity style={{width:'40%',backgroundColor:'blue',height:'35%',flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text>Login..!!</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </View>
            </Modal>
            {
                showLoginView?
                <View style={{width:'100%',height:'10%',justifyContent:'flex-end',alignItems:'flex-start',marginLeft:'2%'}}>
                <TouchableOpacity onPress={()=>{setLoginView(false)}}>
                <Ionicons name="arrow-back-outline" size={35} color="black"/>
                </TouchableOpacity>
                </View>:<View></View>
            }
            <View style={styles.firstpage}>
            {
                showLoginView?
                <View style={styles.pagebox}>
                <View style={styles.loginbox}>
                <TouchableOpacity style={styles.register} onPress={()=>setRegisterModel(true)}>
                <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login} onPress={()=>{setLoginModel(true)}}>
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
            </ImageBackground>
         )
}

const styles = StyleSheet.create({
    startButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        width:'45%',
        height:'25%',
        borderRadius:150
    },
    firstpage:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    pagebox:{
        width:'100%',
        height:'30%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    loginbox:{
        width:'100%',
        height:'90%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    register:{
        backgroundColor:'blue',
        width:'42%',
        height:'28%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150
    },
    login:{
        backgroundColor:'blue',
        width:'42%',
        height:'28%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:150
    },
    registerForm:{
        backgroundColor:'white',
        width:'85%',
        height:'70%',
        borderRadius:30
    }
})