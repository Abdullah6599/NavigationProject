import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Login</Text>
      <Button title='Login' onPress={()=>navigation.navigate('Welcome')} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})























// import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import InputFields from '../Components/InputFields'

// const Login = () => {
//   return (
//     <ImageBackground source={require('../assets/bg.jpeg')} style={styles.ImageBackground}>
//     <View style={styles.Container}>
//       <View>
//       <Text style={styles.textOne}>Login here</Text>
//       <Text style={styles.textTwo}>Welcome back you’ve </Text>
//       <Text style={styles.textThree}>been missed!</Text>
// <View>
// <InputFields  placeholder='Email'secureTextEntry={true}
//  cursorColor={'#000000'}placeholderTextColor={'Black'} />
// <InputFields style={styles.TextInputTwo}placeholder='Password'secureTextEntry={true}
//  cursorColor={'#000000'}placeholderTextColor={'Black'}/>

// <Text style={styles.forg0t}>Forgot your password? </Text>
// </View>
// <TouchableOpacity style={styles.button}activeOpacity={0.7}>
// <Text style={styles.signuptext}>Sign in</Text></TouchableOpacity>
// <Text style={styles.createaccount}>Create new account</Text >
// <Text style={styles.countinue}/>
// <Text style={styles.countinue}>Or continue with </Text>
// <View style={{flexDirection:'row',justifyContent:'center',marginTop:50}}>
// <TouchableOpacity>
// <Image source={require('../assets/google.png')}/>
// </TouchableOpacity>
// <TouchableOpacity>
// <Image source={require('../assets/facebook.png')} style={{marginLeft:10}}/>
// </TouchableOpacity>
// <TouchableOpacity>
// <Image source={require('../assets/apple.png')} style={{marginLeft:10}}/>
// </TouchableOpacity>
// </View>

//       </View>
//     </View>
//     </ImageBackground>
//   )
// }

// export default Login

// const styles = StyleSheet.create({
//   ImageBackground:{
// flex:1  
// },Container:{
//   flex:1
// },
// textOne:{
// color:'#1F41BB',
// marginTop:95,
// marginLeft:130,
// fontSize:35,
// fontWeight:'bold'
// },
// textTwo:{
//  color:'#000000',
//  marginTop:18,
//  marginLeft:120,
//  fontSize:20
// },
// textThree:{
//   color:'#000000',
//   marginLeft:155,
//   marginTop:5,
//   fontSize:20

// },
// TextInputOne:{
//    borderWidth:1.5,
//    borderRadius:10,
//    paddingLeft:15,
//    height:50,
//    width:350,
//    marginLeft:30,
//    borderColor:'#1F41BB',
//    fontSize:18,
//    marginTop:50,
//    backgroundColor:'#F1F4FF'

// },
// TextInputTwo:{
//   borderRadius:10,
//   paddingLeft:20,
//   fontSize:18,
//   marginTop:30,
//   backgroundColor:'#F1F4FF',
//   height:50,
//   width:350
//   ,marginLeft:30,

// },

// forg0t:{
// color:'#1F41BB',
// marginTop:35,
// marginLeft:245
// },
// button:
// {
//   backgroundColor:'#1F41BB',
//   height:55,
//   width:350,
//   marginLeft:30,
//   marginTop:25,
//   padding:10,
//   justifyContent:'center',
//   alignItems:'center',
//   borderRadius:10,
// },
// signuptext:
// {
//   color:'#FFFFFF',
//   fontWeight:'semibold',
//   fontSize:20,
// },
// createaccount:
// {
//   color:'#494949',
//   fontSize:14,
//   fontWeight:'semibold',
//   marginLeft:149,
//   marginTop:30,
// },
// countinue:
// {
//   color:'#1F41BB',
//   marginLeft:160,
//   marginTop:25,
// },
// })