
import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class SimpleButton extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={() => console.log('null')}>
        <View>
          <Text>{'主页面'}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
