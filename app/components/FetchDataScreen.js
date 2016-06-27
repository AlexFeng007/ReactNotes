import React,{Component} from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

var urlPath = 'http://search.video.qiyi.com/m?if=docinfo&key=1d1a765dcb0487d99b66e8deabdf3436';
var CACHE   = [];
export default class FetchDataScreen extends React.Component{

  constructor(props){
    super(props);

    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource:dataSource.cloneWithRows(['row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8',
      'row10','row11','row 12','row 13','row 14','row 15','row 16','row 17','row 18']),
    }

  };

  componentDidMount(){
    console.log("the log has been in");
    this.fetchData();
  }

 fetchData(dataSource){

   fetch(urlPath)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(responseData.video_lib_meta)
       })
      })

 }


  _renderRow(rowData,sectionID,rowID){
    return(

      <View style={styles.row}>
          <Text style={styles.Text}>{rowID}</Text>
      </View>

    )
  }

  render(){
    return(

      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}

      >
      </ListView>
    )
  }
}

const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'white',
    },
    row:{
      flexDirection:'row',
      justifyContent:'center',
      padding:15,
      backgroundColor:'#FA6778',
      marginTop:2,
      borderRadius:3,
    },
    Text:{
      flex:1,
      fontSize:16,
      color:'purple',
      marginLeft:10,
      marginTop:15,
      height:20,
    },
});
