import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  PropTypes,
} from 'react-native'


export default class MenuButton extends React.Component{

  constructor(props)
  {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(){
    if(this.props.onClick){
      this.props.onClick(this.props.showText,this.props.tag);
    }
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={this._onClick}>
          <View style={styles.container}>
              <Image style={styles.iconImg} source={this.props.renderIcon}/>
              <Text style={styles.showText}>{this.props.showText}</Text>
          </View>
      </TouchableWithoutFeedback>
    )
  }
};

const styles = StyleSheet.create({

    container:{
      flex:1,
      alignItems:'center',
    },

    iconImg:{
      width:50,
      height:50,
      marginBottom:1,
      borderRadius:14,
      marginTop:3,
    },

    showText:{
      fontSize:10,
      color:'white',
    }
});
