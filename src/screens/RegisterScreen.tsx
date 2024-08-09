import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button title='Sign Up' onPress={()=>navigation.navigate('Login')}/>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})





















// import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import InputFields from '../Components/InputFields'

// const RegisterScreen = () => {
//   return (
//     <ImageBackground source={require('../assets/bg.jpeg')} style={styles.ImageBackground}>
//     <View style={styles.Container}>
//       <View>
//       <Text style={styles.textOne}>Create Account</Text>
//       <Text style={styles.textTwo}>Create an account so you can explore all the  </Text>
//       <Text style={styles.textThree}>existing jobs</Text>
// <View>
// <InputFields style={styles.TextInputOne} placeholder='Email'secureTextEntry={true}
//  cursorColor={'#000000'}placeholderTextColor={'Black'} />
// <InputFields style={styles.TextInputTwo}placeholder='Password'secureTextEntry={true}
//  cursorColor={'#000000'}placeholderTextColor={'Black'}/>
// <InputFields style={styles.TextInputThree}placeholder='Confirm Password'secureTextEntry={true}
// cursorColor={'#000000'}placeholderTextColor={'Black'}/>
// </View>
// <TouchableOpacity style={styles.button}activeOpacity={0.7}>
// <Text style={styles.signuptext}>Sign up</Text></TouchableOpacity>
// <Text style={styles.alreadytxt}>Already have an account</Text >
// <Text style={styles.textlast}/>
// <Text style={styles.textlast}>Or continue with </Text>
// <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
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

// export default RegisterScreen

// const styles = StyleSheet.create({
//   ImageBackground:{
// flex:1  
// },Container:{
//   flex:1
// },
// textOne:{
// color:'#1F41BB',
// marginTop:100,
// marginLeft:90,
// fontSize:38,
// fontWeight:'bold'
// },
// textTwo:{
//  color:'#000000',
//  marginTop:5,
//  marginLeft:75,
//  fontSize:15
// },
// textThree:{
//   color:'#000000',
//   marginLeft:170,
//   marginTop:5

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
//   width:350,
//   marginLeft:30,

// },
// TextInputThree:{
//   borderRadius:10,
//   paddingLeft:20,
//   fontSize:18,
//    marginTop:30,
//    backgroundColor:'#F1F4FF',
//   height:50,
//   width:350,
//   marginLeft:30,
// },
// button:
// {
//   backgroundColor:'#1F41BB',
//   height:55,
//   width:350,
//   marginLeft:30,
//   marginTop:35,
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
// alreadytxt:
// {
//   color:'#494949',
//   fontSize:15,
//   fontWeight:'semibold',
//   marginLeft:120,
//   marginTop:30,
// },
// textlast:
// {
//   color:'#1F41BB',
//   marginLeft:150,
//   marginTop:20,

// },

// })
