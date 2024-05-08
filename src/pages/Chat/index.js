import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import IMAGES from '../../assets/images'
import { BoxMessage } from '../../components'
import Header from '../Header';

export default function Chat({ navigation, route }) {
  const message = [{
        index: 1,
        role: 'user',
        message: 'Halo, Apakah masih ada?',
        gambar: IMAGES.laptop,
    },{
        index: 2,
        role: 'admin',
        message: 'Halo, Maaf udah sold out...',
        gambar: null,
    // },{
    //   index: 3,
    //   role: 'user',
    //   message: 'Apakah harganya sesuai gambar?',
    // },{
    //   index: 4,
    //   role: 'admin',
    //   message: 'Harga sudah sesuai dengan gambar ya',
    }];
    const role = 'user';
  return (
    <ScrollView style={{
      backgroundColor: '#FFFFFF',
    }}>
      <Header route={route.name}/>
      <View style={{
        paddingHorizontal: 20,
      }}>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
        }}>Chat</Text>
        <BoxMessage message={message} navigation={navigation} role={role} />
      </View>
    </ScrollView>
  )
}
