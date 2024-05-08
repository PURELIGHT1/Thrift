import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Button({
  borderColor = "#004AAD",
  backgroundColor = "#FFDE59",
  textColor = "#000000",
  textTitle =  "Text",
  fontSize = 16,
  customStyle = {},
  italic = false,
  borderRadius = null,
  padding = null,
  width = null,
  icon = null,
  borderWidth=null,
  height=null,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {
        marginTop: 20,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        width: padding ? null: width,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: padding,
        borderRadius: borderRadius,
        borderWidth: borderWidth ? borderWidth : 1,
      }, customStyle, icon && {flexDirection: 'row', justifyContent: 'space-between'}]}
      {...props}
    >
        <Text style={{
            color: textColor,
            fontSize: fontSize,
            fontWeight: 'bold',
            fontStyle: italic ? 'italic' : 'normal',
        }}>
            {textTitle}
        </Text>
        {icon && <View>{icon}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
