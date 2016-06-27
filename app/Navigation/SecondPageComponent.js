import React from 'react'
import {
  view,
  Navigator
}from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component{

      constructor(props){
        super(props);
        this.state = {};
      }

      _pressButton(){
        const{navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
      }
      render(){
        return (
          <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                  <Text>电我跳回去</Text>
                </TouchableOpacity>
          </View>
        );
      }
}
