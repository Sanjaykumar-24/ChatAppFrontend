import React, { useContext } from 'react'
import {View,Text,StyleSheet, Modal, Button} from 'react-native'
import { Context } from '../context/Context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
export default function ChatScreen({navigation}) {

  const {group,setGroup,join,setJoin,setGroupId} = useContext(Context)
  
  return (
    <View style={{flex:1}}>
    <View style={styles.top}>
    <Text style={{fontSize:40}}>Welocome</Text>
    </View>

    {group &&
      <View style={{width:'100%',height:'80%',flexDirection:'row',justifyContent:'center',flexDirection:'row',marginTop:'30%'}}>
      <View style={{backgroundColor:'blue',width:'80%',height:'40%',flexDirection:'col',justifyContent:'center'}}>
      <View style={{width:'100%',height:'50%',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <TextInput onChangeText={(e)=>{setGroupId(e)}} style={{width:'85%',height:'40%',borderColor:'white',borderWidth:0.5,paddingLeft:'5%'}}/>
      </View>
      <View style={{width:'100%',height:'50%',flexDirection:'col',justifyContent:'center'}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Message')}} style={{width:'85%',height:'60%',backgroundColor:'white',marginRight:'20%',marginLeft:'8%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setGroup(false)} style={{width:'85%',height:'60%',backgroundColor:'white',marginRight:'20%',marginLeft:'8%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text>Cancel</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
     }

   {join &&
    <View style={{width:'100%',height:'80%',flexDirection:'row',justifyContent:'center',flexDirection:'row',marginTop:'30%'}}>
      <View style={{backgroundColor:'blue',width:'80%',height:'40%',flexDirection:'col',justifyContent:'center'}}>
      <View style={{width:'100%',height:'50%',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <TextInput onChangeText={(e)=>{setGroupId(e)}} style={{width:'85%',height:'40%',borderColor:'white',borderWidth:0.5,paddingLeft:'5%'}}/>
      </View>
      <View style={{width:'100%',height:'50%',flexDirection:'col',justifyContent:'center'}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Message')}} style={{width:'85%',height:'60%',backgroundColor:'white',marginRight:'20%',marginLeft:'8%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text>Join</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setJoin(false)} style={{width:'85%',height:'60%',backgroundColor:'white',marginRight:'20%',marginLeft:'8%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text>Cancel</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
   }
  
    <View style={styles.bottom}>
    <View style={{width:'80%',height:'80%'}}>
    <TouchableOpacity style={styles.group} onPress={()=>{
      if(!join)
      {
      setGroup(true)
      }
    }}>
    <Text>Create group..!!</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.group} onPress={()=>{
      if(!group)
      {
      setJoin(true)
      }
    }}>
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