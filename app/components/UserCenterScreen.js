import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
}from 'react-native'

export default class UserCenterScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>

          <View style={[styles.item,styles.one]}>
              <Text style={styles.itemText}>1</Text>
          </View>

          <View style={[styles.item,styles.two]}>
              <Text style={styles.itemText}>2</Text>
          </View>

          <View style={[styles.item,styles.three]}>
              <Text style={styles.itemText}>3</Text>
          </View>

      </View>

    )
  }

}

var styles = StyleSheet.create({
  container:{
    flex:1,
    //borderWidth:10,
    //borderColor:'purple',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  item:{
    backgroundColor:'#EEE',
    padding:25,
  },
  one:{
    backgroundColor:'red',
  },
  two:{
    backgroundColor:'green',
  },
  three:{
    backgroundColor:'blue',
  },

  itemText:{
    color:'white',
    fontSize:40,
  },
});
