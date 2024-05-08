import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import IMAGES from '../../assets/images'
import { BoxPembayaran } from '../../components'
import Header from '../Header'

export default function Pembayaran({ navigation, route }) {
  const data = {
    gambar: IMAGES.laptop,
    harga: 'Rp. 5.000.000',
    jalan: 'Jl Kol Atmo'
  }
  const item = route.params.item;
  return (
    <ScrollView style={{
      backgroundColor: '#FFFFFF',
    }}>
      <Header route={route.name}/>
      <View style={{
        paddingHorizontal: 20,
        marginBottom: 20,
      }}>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
        }}>Pembayaran...</Text>
        <BoxPembayaran dataURI={item == null ? data : item} navigation={navigation} />
      </View>
    </ScrollView>
  )
}
