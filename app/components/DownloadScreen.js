import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView,
}from 'react-native'

import Swiper from 'react-native-swiper';

var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];


var BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];


export default class DownloadScreen extends React.Component{
  render()
  {
    return (
    <ScrollView style={styles.container}>

    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={true}>
         <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
         <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
         <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
       </Swiper>

        <View style={[styles.sbu_red,styles.sbu_view]}>
            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

                <View style={[styles.sbu_con_flex]}>
                    <Text style={styles.font16}>酒店</Text>
                </View>

                <View style={[styles.sbu_con_flex]}>
                    <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
                </View>

            </View>


            <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                  <View style={[styles.sbu_con_flex,styles.sbu_text,styles.sbu_borderBottom]}>
                        <Text style={[styles.font16]}>海外</Text>
                  </View>
                  <View style={[styles.sbu_con_flex, styles.sub_text]}>
                        <Text style={[styles.font16]}>周边</Text>
                  </View>
            </View>

            <View style={[styles.sbu_flex]}>
        		      <View style={[styles.sbu_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			         <Text style={[styles.font16]}>团购.特惠</Text>
        		      </View>

        		      <View style={[styles.sbu_con_flex, styles.sbu_text]}>
        			         <Text style={[styles.font16]}>客栈.公寓</Text>
        		      </View>
           </View>


        </View>


        <View style={[styles.sbu_blue,styles.sbu_view]}>

               <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

                  <View style={[styles.sbu_con_flex]}>
                      <Text style={styles.font16}>机票</Text>
                  </View>

                  <View style={[styles.sbu_con_flex]}>
                      <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
                  </View>

              </View>


              <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                    <View style={[styles.sbu_con_flex,styles.sbu_text,styles.sbu_borderBottom]}>
                          <Text style={[styles.font16]}>火车票</Text>
                    </View>
                    <View style={[styles.sbu_con_flex, styles.sub_text]}>
                          <Text style={[styles.font16]}>接收机</Text>
                    </View>
              </View>

              <View style={[styles.sbu_flex]}>
                    <View style={[styles.sbu_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                         <Text style={[styles.font16]}>汽车票</Text>
                    </View>

                    <View style={[styles.sbu_con_flex, styles.sbu_text]}>
                         <Text style={[styles.font16]}>自驾.专车</Text>
                    </View>
             </View>

        </View>

        <View style={[styles.sbu_green,styles.sbu_view]}>

            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

                <View style={[styles.sbu_con_flex]}>
                    <Text style={styles.font16}>旅游</Text>
                </View>

                <View style={[styles.sbu_con_flex]}>
                    <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[2]}}></Image>
                </View>

            </View>


            <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                  <View style={[styles.sbu_con_flex,styles.sbu_text,styles.sbu_borderBottom]}>
                        <Text style={[styles.font16]}>门票.玩乐</Text>
                  </View>
                  <View style={[styles.sbu_con_flex, styles.sub_text]}>
                        <Text style={[styles.font16]}>出境WiFi</Text>
                  </View>
            </View>

            <View style={[styles.sbu_flex]}>
                  <View style={[styles.sbu_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                       <Text style={[styles.font16]}>大保健</Text>
                  </View>

                  <View style={[styles.sbu_con_flex, styles.sbu_text]}>
                       <Text style={[styles.font16]}>签证</Text>
                  </View>
           </View>
        </View>

        <View style={[styles.sbu_yellow,styles.sbu_view]}>
            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

                <View style={[styles.sbu_con_flex]}>
                    <Text style={styles.font16}>攻略</Text>
                </View>

                <View style={[styles.sbu_con_flex]}>
                    <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[3]}}></Image>
                </View>

            </View>


            <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                  <View style={[styles.sbu_con_flex,styles.sbu_text,styles.sbu_borderBottom]}>
                        <Text style={[styles.font16]}>周末游</Text>
                  </View>
                  <View style={[styles.sbu_con_flex, styles.sub_text]}>
                        <Text style={[styles.font16]}>礼品卡</Text>
                  </View>
            </View>

            <View style={[styles.sbu_flex]}>
                  <View style={[styles.sbu_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                       <Text style={[styles.font16]}>美食.购物</Text>
                  </View>

                  <View style={[styles.sbu_con_flex, styles.sbu_text]}>
                       <Text style={[styles.font16]}>更多</Text>
                  </View>
           </View>
        </View>
        </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F2F2F2',
      marginTop:-64,
    },

    sbu_red:{
      backgroundColor:'#FA6778',
      borderColor:'#FA6778',
      marginTop:0,
    },

    sbu_blue:{

      backgroundColor:'#3D98FF',
      borderColor:'#3D98FF',
    },
    sbu_green:{
      backgroundColor:'#5EBE00',
      borderColor:'#5EBE00',
    },
    sbu_yellow:{
      backgroundColor:'#FC9720',
      borderColor:'#FC9720',
    },

    sbu_view:{
      height:114,
      marginLeft:5,
      marginRight:5,
      borderWidth:1,
      borderRadius:5,
      marginBottom:1,
      flexDirection:'row'
    },

    sbu_flex:{
      flex:1,
    },

    sbu_con_flex:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },

    sbu_borderRight:{
       borderColor:'#fff',
       borderRightWidth:0.5,
    },

    sbu_borderBottom:{
      borderBottomWidth:0.5,
      borderBottomColor:'#fff',
    },

    font16:{
      fontSize:17,
      color:'#FFF',
      fontWeight:'900',
    },
    sbu_icon_img:{
        height:40,
        width:40,
        resizeMode:Image.resizeMode.contain,
    },

    text:{
      flex:2,
      fontSize:18,
      justifyContent:'center',
      alignItems:'center',
      color:'#fff'
    },

    wrapper:{
      height:80,
    },

    slide:{
      marginLeft:5,
      marginRight:5,
      borderWidth:1,
      borderRadius:5,
      marginTop:64,
      height:80,
      resizeMode:Image.resizeMode.contain,
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
