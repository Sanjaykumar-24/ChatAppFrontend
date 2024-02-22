import React, { useContext } from 'react'
import {View,Text,StyleSheet, Modal} from 'react-native'
import { Context } from '../context/Context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
export default function ChatScreen() {
  const {group,setGroup,join,setJoin} = useContext(Context)
  return (
    <View style={{flex:1}}>

    <View style={styles.top}>
    <Text style={{fontSize:40}}>Welocome</Text>
    </View>

    <Modal visible={group} transparent={true} onRequestClose={()=>{setGroup(false)}}>
    <View style={{width:'100%',height:'80%',flexDirection:'row',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
    <View style={{backgroundColor:'blue',width:'80%',height:'40%'}}>
    <Text>create</Text>
    </View>
    </View>
    </Modal>


    <Modal visible={join} transparent={true} onRequestClose={()=>{setJoin(false)}}>
    <View style={{width:'100%',height:'80%',flexDirection:'row',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
    <View style={{backgroundColor:'blue',width:'80%',height:'40%'}}>
    <Text>join</Text>
    </View>
    </View>
    </Modal>


    <View style={styles.bottom}>
    <View style={{width:'80%',height:'80%'}}>

    <TouchableOpacity style={styles.group} onPress={()=>{setGroup(true)}}>
    <Text>Create group..!!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.group} onPress={()=>{setJoin(true)}}>
    <Text>Join group..!!</Text>
    </TouchableOpacity>

    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top:{
    width:'100%',
    backgroundColor:'blue',
    height:'15%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  bottom:{
    width:'100%',
    height:'30%',
    position:'absolute',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    bottom:0
  },
  group:{
    width:'100%',
    height:'50%',
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
  }
})