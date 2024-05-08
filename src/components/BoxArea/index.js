import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function BoxArea({
  dataURI = [],
  imageStyle = {
    width: 250,
    height: 250,
  },
  navigation
}) {
  return (
    <View style={styles.container}>
      {dataURI.map((item, index) => (
        <View key={index} style={styles.box}>
          <View style={styles.imageContainer}>
            <Image source={item.gambar} style={imageStyle} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.priceText}>{item.harga}</Text>
            <Text style={styles.addressText}>{item.jalan}</Text>
            <View style={styles.buttonContainer}>
              <Button textTitle='Beli Sekarang' fontSize={12} padding={2} borderWidth={3} icon={<MaterialIcons name='shopping-cart' size={20} color={'black'} />}
              onPress={()=> navigation.navigate('Pembayaran', {item})} />
              <MaterialCommunityIcons name="message-outline" size={28} color={"black"} style={{alignSelf:'center', marginTop: 20}} 
              onPress={()=> navigation.navigate('Chat')}/>
            </View>
          </View>
          
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  box: {
    backgroundColor: 'white',
    borderColor: '#004AAD',
    borderWidth: 3,
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  detailsContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer: {
    alignItems: 'center',
  }, 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  priceText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addressText: {
    marginTop: 5,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.50)',
  },
});
