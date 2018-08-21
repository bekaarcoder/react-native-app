import React from 'react';
import {ReactNative, Text, View} from 'react-native';

const Header = () => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#17a2b8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  textStyle: {
    fontSize: 30,
    color: '#ffffff'
  }
}

export default Header;