import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import IMAGES from '../../assets/images'
import { BoxMessage, Button } from '../../components'
import Header from '../Header';

export default function Profile({ navigation, route }) {
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
        marginTop: 50,
        paddingHorizontal: 2,
      }}>
        <TouchableOpacity onPress={() => alert('Edit Foto Profile')} style={{
          borderWidth: 2,
          alignItems: 'center',
          padding: 10,
          borderColor: '#004AAD',
        }}>
          <Text style={{
            fontSize: 20
          }}>Edit Foto Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Edit Username')} style={{
          borderWidth: 2,
          alignItems: 'center',
          padding: 10,
          borderColor: '#004AAD',
        }}>
          <Text style={{
            fontSize: 20
          }}>Edit Username</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Edit Password')} style={{
          borderWidth: 2,
          alignItems: 'center',
          padding: 10,
          borderColor: '#004AAD',
          marginBottom: 30,
        }}>
          <Text style={{
            fontSize: 20
          }}>Edit Password</Text>
        </TouchableOpacity>

        <Button
          textTitle='Logout'
          textColor='#000000'
          borderRadius = {50}
          borderWidth={2}
          padding={8}
          fontSize={20}
          onPress={() => navigation.navigate('Login')}
        />
        
      </View>
    </ScrollView>
  )
}