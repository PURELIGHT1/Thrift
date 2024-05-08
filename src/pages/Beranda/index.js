import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { BoxArea, InputText } from '../../components'
import { FontAwesome } from '@expo/vector-icons';
import IMAGES from '../../assets/images';
import Header from '../Header';

export default function Beranda({navigation, route}) {
    const data = [{
        index: 1,
        gambar: IMAGES.laptop,
        harga: 'Rp. 5.000.000',
        jalan: 'Jl Kol Atmo'
    },{
        index: 2,
        gambar: IMAGES.laptop,
        harga: 'Rp. 4.000.000',
        jalan: 'Jl Kol Atmo 2'
    },{
        index: 3,
        gambar: IMAGES.laptop,
        harga: 'Rp. 3.000.000',
        jalan: 'Jl Kol Atmo 3'
    }];
  return (
    <ScrollView style={{
        backgroundColor: '#FFFFFF'
    }}>
        <Header route={route.name}/>
        <View style={{
            paddingHorizontal: 20,
            marginTop: 10,
        }}>
            <InputText
                placeholder="Kamu sedang cari apa ?"
                border={true}
                borderColor="#000000"
                vertical={7}
                horizontal={5}
                rightIcon={
                    <FontAwesome name="search" size={24} color={'#000000'} />
                }
                width={'80%'}
                italic={true}
                padding={10}
                left={2}
                borderRadius={20}
            />
            <Text>Di Sekitar kamu...</Text>
            <View style={{
                marginTop: 30,
            }}>
                <BoxArea dataURI={data} navigation={navigation}/>
            </View>
        </View>
    </ScrollView>
  )
}

