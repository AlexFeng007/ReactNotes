import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import SimpleButton from '../../SimpleButton';
import NoteScreen   from './NoteScreen'

export default class RootScreen extends React.Component{

navigate(routeName)
{
  this.props.navigator.push({
    name:routeName
  })
}

onButtonPress(){
  this.props.navigator.push({
    title:'NoteScreenTitle',
    component:NoteScreen,
    passProps:{myElement:'what your name?'}
  });
}

    // render(){
    //   return (
    //     <View style={styles.container}>
    //       <TouchableOpacity style={styles.button} onPress={() => this.onButtonPress()}
    //        underlayColor='#bbbbbb'
    //       >
    //       <Text style={styles.btnText}>RootScreen</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }
    render(){
      return(
        <View style={styles.container}>
            <Text style={styles.noNotesText}>the button will appeal in the down side~!~~~~~!faahha</Text>
            <Text style={styles.button}>RootScreen!</Text>
        </View>
      )
    }
}

  //<TouchableOpacity style={styles.button} onPress={this.navigate.bind(this,'createNode')}
  // <TouchableOpacity style={styles.button} onPress={this.onButtonPress()}
  // underlayColor='#bbbbbb'>
  // <TouchableOpacity style={styles.button} onPress={this.navigate.bind(this,'createNode')}
  // underlayColor='#bbbbbb'>
  //   <Text style={styles.btnText}>'RootScreen'</Text>
  // </TouchableOpacity>

var styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#333333',
      // padding: 10
    },
    welcomeText:{
      fontSize:20,
      textAlign:'center',
      margin:200
    },
    noNotesText:{
      //color:"#48209A",
      fontSize:18,
      fontWeight:'bold',
      color:'white',
      textAlign:'center',
      marginBottom:20,
    },

    btnText:{
      fontSize:18,
      color:'#fff',
      marginTop:6
    },
    button:{
       fontSize:18,
       fontWeight:'bold',
       color:'white',
       backgroundColor:'#123456',
       justifyContent:'center',
       borderRadius:8,
       borderWidth:1,
       shadowColor:'darkgrey',
       shadowOffset:{
         width:1,
         height:1,
       },
       shadowOpacity:0.8,
       shadowRadius:8,
       paddingHorizontal: 20,
       paddingVertical: 15,
    },
});



// <View style={[styles.sbu_red, styles.sbu_view]}>
//    <TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
//      <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
//        <View style={[styles.sub_con_flex, styles.sub_text]}>
//          <Text style={[styles.font16]}>酒店</Text>
//        </View>
//        <View style={[styles.sub_con_flex]}>
//          <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
//        </View>
//      </View>
//    </TouchableHighlight>
//    <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
//      <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
//        <Text style={[styles.font16]}>海外</Text>
//      </View>
//      <View style={[styles.sub_con_flex, styles.sub_text]}>
//        <Text style={[styles.font16]}>周边</Text>
//      </View>
//    </View>
//    <View style={[styles.sbu_flex]}>
//      <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
//        <Text style={[styles.font16]}>团购.特惠</Text>
//      </View>
//      <View style={[styles.sub_con_flex, styles.sub_text]}>
//        <Text style={[styles.font16]}>客栈.公寓</Text>
//      </View>
//    </View>
//  </View>
