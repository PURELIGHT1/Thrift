import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ICONS from '../../assets/icons'
import { FontAwesome6 } from '@expo/vector-icons';

export default function Header({route}) {
  console.log(route);
  return (
    <View>
        {
          route === "Profile" && 
          <View>
            <Image style={styles.image2} source={ICONS.logo} />
            <View style={styles.leftContent}>
              <FontAwesome6 name="user" size={40} color={"black"} />
              <Text style={styles.text2}>Mikhael</Text>
            </View> 
          </View>
        }
        {
          route !== "Profile" &&
          <View style={styles.content}>
            <Image source={ICONS.logo} style={styles.image} />
            <View style={styles.rightContent}>
                <Text style={styles.text}>Halo Mikhael !</Text>
                <FontAwesome6 name="user" size={28} color={"black"} />
            </View> 
          </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: -20,
  },
  image: {
    width: 180,
    height: 100,
  },
  image2: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginRight: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
  },
})