import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonContainer, buttonStyle, textStyle } = styles;

  return (
    <View style={buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={buttonStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    elevation: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#007aff",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    width: "100%"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
};

export { Button };
