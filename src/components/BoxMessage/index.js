import React from 'react';
import { Image, TextInput, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function BoxMessage({
    message = [],
    role = null,
    navigation
}) {
  return (
    <ScrollView>
        {message.map((item, index) => (
          <View key={index} style={styles.messageContainer}>
            {item.role === 'user' &&
              <View style={styles.userContainer}>
                {item.gambar &&  
                  <Image source={item.gambar} style={styles.image} />
                }
                <View style={styles.messageContent}>
                  <TextInput value={item.message} editable={false} style={[styles.textInput, styles.userTextInput]} />
                  <FontAwesome6 name="user" size={24} color={"black"} />
                </View>
              </View>
            }

            {item.role === 'admin' &&
              <View style={styles.adminContainer}>
                {item.gambar &&
                  <Image source={item.gambar} style={styles.image} />
                }
                <View style={styles.messageContent}>
                  <FontAwesome6 name="user" size={24} color={"black"} />
                  <TextInput value={item.message} editable={false} style={[styles.textInput, styles.adminTextInput]} />
                </View>
              </View>
            }
          </View>
        ))}
        {
          (role === "admin" || role === "user") && (
            <View style={role === "admin" ? [styles.adminContainer, {marginTop: 30}] : [styles.userContainer, {marginTop: 30}]}>
              <View style={styles.messageContent}>
                <TextInput 
                  style={[styles.textInput, role === "admin" ? styles.adminTextInput : styles.userTextInput, { maxWidth: '80%' }]} 
                  placeholder="Type your message..." 
                  multiline={true} 
                  numberOfLines={1}
                />
                <TouchableOpacity style={styles.sendButton}>
                  <FontAwesome6 name="paper-plane" size={24} color={"white"} />
                </TouchableOpacity>
              </View>
            </View>
          )
        }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    marginTop: 20,
  },
  userContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  adminContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  messageContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#004AAD',
    paddingHorizontal: 10,
    color: 'black',
  },
  userTextInput: {
    textAlign: 'right',
    marginRight: 10,
  },
  adminTextInput: {
    textAlign: 'left',
    marginLeft: 10,
  },
  sendButton: {
    backgroundColor: '#004AAD',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});
