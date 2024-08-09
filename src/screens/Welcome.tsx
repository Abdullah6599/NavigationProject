import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})























// import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const Welcome = () => {
//   return (
//     <ImageBackground source={require('../assets/bg.jpeg')} style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <View style={{ alignItems: 'center' }}>
//           <Image source={require('../assets/workb.png')} style={styles.image} />
//         </View>
//         <Text style={styles.textOne} >
//           Discover Your </Text>
//         <Text style={styles.textTwo}>
//           Dream Job here</Text>
//         <Text style={styles.textThree}>
//           Explore all the existing job roles based on your </Text>
//         <Text style={styles.textFour}>
//           interest and study major</Text>
//         <View style={styles.buttonsview}>
//           <TouchableOpacity style={styles.buttonOne} activeOpacity={0.7}>
//             <Text style={styles.login}>
//               Login
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity activeOpacity={0.3}>
//             <Text style={styles.registertext}>
//               Register
//             </Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </ImageBackground>
//   )
// }

// export default Welcome

// const styles = StyleSheet.create({
//   image:
//   {
//     height: 350, 
//     width: 350, 
//     marginTop: 50
//   },
//   textOne:
//   {
//     color: '#1F41BB', 
//     marginLeft: 90, 
//     fontWeight: 'bold', 
//     fontSize: 40, 
//     marginTop: 30
//   },
//   textTwo:
//   {
//     color: '#1F41BB', 
//     marginLeft: 70, 
//     fontWeight: 'bold', 
//     fontSize: 40,
//   },
//   textThree:
//   {
//     color: '#000000', 
//     marginLeft: 50, 
//     marginTop: 25
//   },
//   textFour:
//   {
//     color: '#000000', 
//     marginLeft: 120
//   },
//   buttonsview:
//   {
//     flexDirection: 'row', 
//     marginTop: 65, 
//     marginLeft: 55
//   },
//   buttonOne:
//   {
//     backgroundColor: '#1F41BB', 
//     width: 135, 
//     height: 48, 
//     borderRadius: 10
//   },
//   login:
//   {
//     color: '#FFFFFF', 
//     fontSize: 20, 
//     paddingLeft: 45, 
//     paddingTop: 10
//   },
//   buttonTwo: {
//     width: 135, 
//     height: 48, 
//     backgroundColor: '#1F41BB', 
//     borderRadius: 10,
//   },
//   registertext:
//   {
//     fontSize: 21, 
//     paddingLeft: 47, 
//     paddingTop: 10, 
//     color: '#0A0A0A'

//   }
// })