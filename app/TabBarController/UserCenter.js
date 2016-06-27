import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
}from 'react-native'


export default class UserCenter extends React.Component{
    render(){
      return(
        <View style={styles.container}>
        <Text>This is the UserCenter ViewController</Text>
        </View>
      )
    }
}

var styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#333333',
      padding: 10
    },
    button:{
       height:36,
       flex:1,
       flexDirection:'row',
       backgroundColor:'#123456',
       justifyContent:'center',
    },
    btnText:{
      fontSize:18,
      color:'#fff',
      marginTop:6
    }
});
