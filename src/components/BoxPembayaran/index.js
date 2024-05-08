import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BoxPembayaran({
    dataURI = null,
    imageStyle = {
        width: 300,
        height: 250,
    },
    navigation
}) {
    const transfer = [{
        index : 1,
        via: 'Via Transfer',
        namaBayar: 'BRI 12345678910 An yoyop pratama'
    }, {
        index : 2,
        via: 'COD',
        namaBayar: '+62 123456789 (wa) yoyop pratama'
    }];
  return (
    <View style={styles.container}>
    {dataURI && 
        <>
        <View style={styles.uriContainer}>           
            <Image source={dataURI.gambar} style={imageStyle} />
            <Text style={styles.priceText}>{dataURI.harga}</Text>
            <Text style={styles.addressText}>{dataURI.jalan}</Text>
        </View>
        {
            transfer && transfer.map((item, index) => (
                <View key={index}>
                    <View style={styles.viaBayarContainer}>
                        <Text style={styles.transferText}>{item.via}</Text>
                        <MaterialCommunityIcons name="drag-horizontal-variant" size={24} color="black" />
                    </View>
                    <View style={{
                        marginHorizontal: 10,
                    }}>
                        <View style={styles.pembayaranContainer}>
                            <Text style={{
                                textAlign: 'center',
                            }}>
                               {item.namaBayar}
                            </Text>
                        </View>
                    </View>
                </View>
                
                
            ))
        }
        </>
    }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  uriContainer: {
    marginLeft: 5,
    marginRight: 5,
    overflow: 'hidden',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  addressText:{
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.50)',
  },
  viaBayarContainer: {
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: '#FFDE59',
    borderColor: '#004AAD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transferText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  pembayaranContainer: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#004AAD',
    marginTop: -5,
  }
});