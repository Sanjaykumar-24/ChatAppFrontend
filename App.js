import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import GlobalContext from './context/Context';
const Stack = createStackNavigator()
export default function App() {
  return (
    <GlobalContext>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name='Message' component={MessageScreen} options={{headerShown:false}}/>
    <Stack.Screen name='Chat' component={ChatScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </GlobalContext>
  );
}
