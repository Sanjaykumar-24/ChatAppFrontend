import {Platform} from 'react-native'
import { io } from 'socket.io-client'
export const BaseUrl = Platform.OS === 'android'?'http://10.0'