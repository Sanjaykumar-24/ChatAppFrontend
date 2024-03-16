import React, { useContext, useEffect, useState } from 'react'
//import { io } from 'socket.io-client';
import {View,Text, Touchable, TouchableOpacity} from 'react-native'
import { Context } from '../context/Context'
import { StatusBar } from 'expo-status-bar'
import { FlatList,TextInput } from 'react-native-gesture-handler'
export default function MessageScreen()
{
  //const socket = io('http://localhost:5000')
  const {groupId,setMessage,message,username} = useContext(Context)
  const [data,setData] = useState([])
  // useEffect(()=>{
  //   socket.on('data',(data)=>{
  //     setData([data,...data]);
  //   })
  // },[socket])
  const addmessage = () =>{
    //socket.emit('message',{name:username,message,message})
    setMessage('')
  }
  return (
    <View style={{width:'100%',height:'100%'}}>
    <View style={{width:'100%',height:'80%'}}>
    <View style={{width:'100%',height:'15%',backgroundColor:'orange',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:30}}>chats</Text>
    </View>
    <View style={{width:'100%',height:'85%'}}>
    <FlatList data={data} inverted renderItem={(i)=>{
      let position = 'flex-start'
      let name = i.item.name
      let left = '5%'
      let right = '0%'
      if(i.item.name == username)
      {
        position = 'flex-end'
        name = 'you'
        left = '0%'
        right = '5%'
      }
       return (
        <View style={{width:'100%',height:'auto'}}>
        <View style={{flexDirection:'row',width:'100%',height:'auto',justifyContent:position,alignItems:'center',marginTop:'8%'}}> 
        <View style={{marginRight:right,marginLeft:left,width:'50%',flexDirection:'row',justifyContent:position}}>
        <Text style={{color:'red'}}>{name} : </Text>
        <Text>{i.item.message}</Text>
        </View>
        </View>
        </View>
       )
    }}/>
    </View>
    <View style={{width:'100%',height:'25%',flexDirection:'row',justifyContent:'center'}}>
    <View style={{width:'95%',height:'75%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <TextInput value={message} onChangeText={(e)=>setMessage(e)} placeholder='Message' style={{paddingLeft:'5%',width:'70%',height:'40%',borderWidth:0.5,borderRadius:30}}/>
    <TouchableOpacity onPress={addmessage} style={{borderRadius:30,height:'40%',width:'29%',backgroundColor:'blue',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Text>Send</Text></TouchableOpacity>
    </View>
    </View>
    </View>
    <StatusBar/>
    </View>
  )
}
