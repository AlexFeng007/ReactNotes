import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'

import NoteScreen from './NoteScreen';
import FetchDataScreen from './FetchDataScreen'
import MenuButton from './MenuButton'

import Swiper from 'react-native-swiper';

var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var ImageURLS = [
  require('../Image/0.jpg'),
  require('../Image/1.jpg'),
  require('../Image/2.jpg'),
  require('../Image/3.jpg'),
  require('../Image/4.jpg'),
  require('../Image/5.jpg'),
  require('../Image/6.jpg'),
  require('../Image/7.jpg'),
  require('../Image/8.jpg'),
  require('../Image/9.jpg'),
  require('../Image/10.jpg'),
  require('../Image/11.jpg'),
  require('../Image/12.jpg'),
  require('../Image/13.jpg'),
  require('../Image/14.jpg'),
  require('../Image/15.jpg'),
  require('../Image/8.jpg'),
];


export default class ListViewController extends React.Component{

    constructor(props)
    {
       super(props);
       var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
       this.state = {
         dataSource:dataSource.cloneWithRows(['Nemo', 'Alex','Richard','DashBoard','Luminox','Eveor','steven','row 8',
         'row10','row11','row 12','row 13','row 14','row 15','row 16','row 17','row 18']),
       }
    };

    _renderRow(rowData,sectionID,rowID){
      var imgSource = ImageURLS[rowID];

      switch (rowID%3) {
      case 0:
            return(
              <TouchableOpacity onPress={()=>this._PushNextView()}>
                <View style={styles.row1}>
                    <Image style={styles.ImageSet} source={imgSource} />
                    <Text  style={styles.Text}>{rowData}</Text>
                    <Text  style={styles.SubText}>{'Yestoday you said tommorrow!'}</Text>
                </View>
              </TouchableOpacity>
            )
     case 1:
            return(
              <TouchableOpacity>
                <View style={styles.row2}>
                    <Image style={styles.ImageSet} source={imgSource} />
                    <Text  style={styles.Text}>{rowData}</Text>
                    <Text  style={styles.SubText}>{'Yestoday you said tommorrow!'}</Text>
                </View>
              </TouchableOpacity>
            )
     case 2:
           return(
             <TouchableOpacity>
               <View style={styles.row3}>
                   <Image style={styles.ImageSet} source={imgSource} />
                   <Text  style={styles.Text}>{rowData}</Text>
                   <Text  style={styles.SubText}>{'Yestoday you said tommorrow!'}</Text>
               </View>
             </TouchableOpacity>
           )
      break;
      }
    }

    _PushNextView(){
        this.props.navigator.push({
            component:FetchDataScreen,
            title:"FetchDataScreen",
        });
    }

    //this._onMenuClick = this._onMenuClick.bind(this);

    _onMenuClick(title,tag)
    {
        Alert.alert('提示','little boy ,you click the:' + title + 'Tag:' + tag);
    }

    render(){
      return(
        <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderHeader={()=>{
            return(
              <View style={styles.container}>

                <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={80} showsPagination={true}>
                   <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
                   <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
                   <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
                </Swiper>

                <View style={styles.menuView}>
                          <MenuButton renderIcon={require('../Image/0.jpg')}
                                      showText={'我的关注'} tag={'wdgz'}
                                      onClick={this._onMenuClick}/>
                          <MenuButton renderIcon={require('../Image/1.jpg')}
                                      showText={'物流查询'} tag={'wlcx'}
                                      onClick={this._onMenuClick}/>
                          <MenuButton renderIcon={require('../Image/2.jpg')}
                                      showText={'充值'} tag={'cz'}
                                      onClick={this._onMenuClick}/>
                          <MenuButton renderIcon={require('../Image/3.jpg')}
                                      showText={'电影票'} tag={'dyp'}
                                      onClick={this._onMenuClick}/>
                </View>
                <View style={styles.menuView}>
                          <MenuButton renderIcon={require('../Image/4.jpg')}
                                      showText={'我的关注'} tag={'wdgz'}
                                      onClick={this._onMenuClick}/>
                          <MenuButton renderIcon={require('../Image/5.jpg')}
                                      showText={'物流查询'} tag={'wlcx'}
                                      onClick={this._onMenuClick}/>
                          <MenuButton renderIcon={require('../Image/6.jpg')}
                                      showText={'充值'} tag={'cz'}
                                      onClick={this._onMenuClick}/>
                          <MenuButton renderIcon={require('../Image/7.jpg')}
                                      showText={'电影票'} tag={'dyp'}
                                      onClick={this._onMenuClick}/>
                </View>
             </View>
            )
          }}
          automaticallyAdjustContentInsets={true}
        >
        </ListView>
      )
    }
}

var styles = StyleSheet.create({

  container:{
    flex:1,
  },

  // Text:{
  //   fontSize:28,
  //   alignItems:'center',
  //   justifyContent:'center',
  // }

  NewText:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },

  AnotherText:{

    fontSize:20,
    textAlign:'center',
    marginTop:90,
  },

  CellText:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    color: '#212121',
    fontSize: 16
  },

  CellStyle:{

    paddingVertical: 20,
    paddingLeft: 16,
    backgroundColor:'#E0E0E0',
    borderColor:'white',
    borderWidth: 1.0

  },

  row1:{
    flexDirection:'row',
    //justifyContent:'center',
    padding:10,
    //backgroundColor:'#F6F6F6'
    backgroundColor:'#3D98FF',
    marginTop:3,
    borderRadius:3,
  },

  row2:{
    flexDirection:'row',
    //justifyContent:'center',
    padding:10,
    //backgroundColor:'#F6F6F6'
    backgroundColor:'#FA6778',
    marginTop:3,
    borderRadius:3,
  },
  row3:{
    flexDirection:'row',
    //justifyContent:'center',
    padding:10,
    backgroundColor:'#5EBE00',
    marginTop:3,
    borderRadius:3
  },
  ImageSet:{
    // marginTop:10,
    marginLeft:5,
    alignItems:'center',
    width:50,
    height:50,
    borderRadius:14,
  },
  Text:{

    fontSize:16,
    color:'white',
    width:45,
    height:20,
    marginLeft:10,
  },

  SubText:{
    width:250,
    height:20,
    fontSize:13,
    color:'white',
    marginLeft:-45,
    marginTop:30,
  },

  menuView:{
    flexDirection:'row',
    backgroundColor:'#FC9720',
  },
  wrapper:{
    height:80,
  },
  slide:{
    marginLeft:2,
    marginRight:2,
    borderWidth:1,
    borderRadius:5,
    marginTop:0,
    height:80,
    resizeMode:Image.resizeMode.contain,
  },
});
