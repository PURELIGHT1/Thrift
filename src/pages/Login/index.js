import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import ICONS from '../../assets/icons';
import { Button, InputText } from '../../components';
import { Octicons } from '@expo/vector-icons';

export default function Login({ navigation, route }) {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const onSubmit = async() => {
    console.log(dataLogin);
    if(dataLogin.username !== 'mikhael'){
      alert('Username salah!');
    }else{
      if(dataLogin.password !== 'thrift123'){
        alert('Password salah!');
      }else{
        alert('Login berhasil!');
        setDataLogin({
          username: "",
          password: "",
        });
        navigation.navigate('Main');        
      }
    }
  }
  return (
    <ScrollView style={{
      backgroundColor: '#FFFFFF'
    }}>
      <Image style={styles.logo} source={ICONS.logo} />
      <Text style={styles.textLogin}>Silahkan Login dulu...</Text>
      <View style={{
        paddingHorizontal: 30,
        marginTop: 30,
      }}>
        <InputText 
          title='Username' 
          titleColor='#000000'
          placeholder='Username'
          leftIcon= {
            <Octicons name="book" size={28} color="black" />
          }
          value={dataLogin.username}
          onChangeText={(text) =>setDataLogin({ ...dataLogin, username: text })}  
        />
        <InputText 
          title='Password' 
          titleColor='#000000'
          placeholder='Password'
          leftIcon= {
            <Octicons name="key" size={28} color="black" />
          }
          value={dataLogin.password}
          onChangeText={(text) =>setDataLogin({ ...dataLogin, password: text })}
          secureTextEntry={true}
        />
        <Button 
          textTitle='Login'
          textColor='#004AAD'
          fontSize={20}
          italic={true}
          width={'80%'}
          onPress={onSubmit}
          borderWidth={3}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 250,
    alignSelf: 'center',
  },
  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -20,
  },
});
