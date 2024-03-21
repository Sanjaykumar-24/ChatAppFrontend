import React, { useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import {View,Text, Touchable, TouchableOpacity} from 'react-native'
import { Context } from '../context/Context'
import { StatusBar } from 'expo-status-bar'
import { FlatList,TextInput } from 'react-native-gesture-handler'
export default function MessageScreen()
{
  const socket = io('http://172.16.123.22:5000')
  const {groupId,setMessage,message,username} = useContext(Context)
  const [data,setData] = useState([])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('joinRoom', { room: groupId });
    });
  
    const handleData = (newData) => {
      console.log('Received new data:', newData);
      setData(prevData => [newData, ...prevData]);
    };
  
    socket.on('data', handleData);
  
    return () => {
      socket.off('data', handleData);
    }
  }, [socket]);
  

  
  const addmessage = () =>{
    socket.emit('message',{name:username,message:message,room:groupId})
    setMessage('')
  }
  return (
    <View style={{width:'100%',height:'100%'}}>
    <View style={{width:'100%',height:'80%'}}>
    <View style={{width:'100%',height:'15%',backgroundColor:'orange',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:30}}>chats</Text>
    </View>
    <View style={{width:'100%',height:'85%'}}>
    <FlatList inverted
    data={data}
    renderItem={({ item }) => {
      let position = 'flex-start';
      let name = item.name;
      let left = '5%';
      let right = '0%';
      if (item.name === username) {
        position = 'flex-end';
        name = 'you';
        left = '0%';
        right = '5%';
      }
      return (
        <View style={{ width: '100%', height: 'auto' }}>
          <View style={{ flexDirection: 'row', width: '100%', height: 'auto', justifyContent: position, alignItems: 'center', marginTop: '8%' }}>
            <View style={{ marginRight: right, marginLeft: left, width: '50%', flexDirection: 'row', justifyContent: position }}>
              <Text style={{ color: 'red' }}>{name} : </Text>
              <Text>{item.message}</Text>
            </View>
          </View>
        </View>
      );
    }}
  />  
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
