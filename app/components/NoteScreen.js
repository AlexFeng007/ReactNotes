
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ListView,
} from 'react-native'


export default class NoteScreen extends React.Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(['row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8',
      'row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
    }
  }

  popAll(){
    this.props.navigator.popToTop();
  }
  popOnce(){
    this.props.navigator.pop();
  }

  render(){
    return(
      <ListView  style={styles.listViewContainer}

        dataSource={this.state.dataSource}

        renderRow={(rowData) =>

              <Text style={[styles.rowText,styles.rowStyle]}>{rowData}</Text>}

      />
    )
  }

    //dataSource={this.state.dataSource}

    // render(){
    //   return (
    //     <View style={styles.container}>
    //          <Text style={styles.text}>My value:{this.props.myElement}</Text>
    //     <TouchableOpacity style={styles.button} onPress={() => this.popAll()}
    //       underlayColor='#bbbbbb'>
    //     <Text style={styles.btnText}>PopOut</Text>
    //     </TouchableOpacity>
    //     </View>
    //     // <View stye={styles.container}>
    //     // <Text style={styles.btnText}>PopOut</Text>
    //     // </View>
    //   )
    //
    // }

}


// <TouchableOpacity style={styles.button} onPress={() => this.onButtonPress()}
//  underlayColor='#bbbbbb'
// >
// <Text style={styles.btnText}>RootScreen</Text>
// </TouchableOpacity>

var styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      //backgroundColor:'#123456',
      padding:10
    },

    listViewContainer:{
      flex:1,
      //backgroundColor:'#123456'
    },

    text:{
      flex:2,
      fontSize:18,
      justifyContent:'center',
      alignItems:'center',
      color:'#fff'
    },
    button:{
       //fontSize:18,
       //fontWeight:'bold',
       //color:'white',
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

    style_user_input:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'purple',
      borderColor:'black',
      borderBottomColor:'black',
      borderRadius:5,
      marginTop:180,
      height:35
    },

    style_pwd_input:{
      backgroundColor:'#fff',
      height:35,
    },

    cell:{
      flexDirection:'row',
      justifyContent:'center',
      padding:10,
      backgroundColor:'#F6F6F6',
    },

    rowStyle: {
          paddingVertical: 20,
          paddingLeft: 16,
          backgroundColor:'#E0E0E0',
          // borderTopColor: 'white',
          // borderLeftColor: 'white',
          // borderRightColor: 'white',
          // //borderBottomColor: '#E0E0E0',
          // borderBottomColor:'white',
          borderColor:'white',

          borderWidth: 1.0
    },
    
    rowText: {
        color: '#212121',
        fontSize: 16
    },
});
