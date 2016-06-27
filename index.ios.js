/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';

//import messageName from './temp'

import SimpleButton from './SimpleButton';
import FirstPageComponent from './app/Navigation/FirstPageComponent';

import NoteScreen from './app/components/NoteScreen';
import RootScreen from './app/components/RootScreen';
import DownloadScreen from './app/components/DownloadScreen'
import UserCenterScreen from './app/components/UserCenterScreen'
import ListViewScreen   from './app/components/ListViewController'


class ReactNotes extends Component {

 naviage(routeName) {
   this.props.navigator.push({
     name:routeName
   })
 }

 // constructor(props){
 //   super(props);
 //   this.state ={
 //     selectedTab:'Note'
 //   };
 // }

 constructor(props){
   super(props);
   this.state={
     selectedTab:'downloads'
   }
 }

 render(){
   return(
     //<TabBarIOS selectedTab={this.state.selectedTab}>
     <TabBarIOS style={{flex:1,alignItems:"flex-end"}} tintColor="white" barTintColor="darkslateblue">

     <TabBarIOS.Item
       selected={this.state.selectedTab === 'downloads'}
       systemIcon="downloads"
       onPress={() => {
         this.setState({
           selectedTab:'downloads'
         });
       }}>

     <NavigatorIOS style={styles.container} initialRoute={{component:DownloadScreen,title:"CollectionViewDemo"}} />
     </TabBarIOS.Item>

     <TabBarIOS.Item
       selected={this.state.selectedTab === 'ListView'}
       systemIcon="featured"
       onPress={() => {
         this.setState({
           selectedTab:'ListView'
         });
       }}>
     <NavigatorIOS style={styles.container} initialRoute={{component:ListViewScreen,title:"ListViewDemo"}} />
     </TabBarIOS.Item>

    
     <TabBarIOS.Item
        systemIcon="bookmarks"
        selected={this.state.selectedTab ==='root'}
        onPress={() => {
          this.setState({
            selectedTab:'root'
        });
      }}>

      <NavigatorIOS style={styles.container} initialRoute={{component:RootScreen,title:"RootView"}} />
      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'Note'}
        systemIcon="history"
        onPress={() => {
          this.setState({
            selectedTab:'Note'
          });
        }}>

      <NavigatorIOS style={styles.container} initialRoute={{component:NoteScreen,title:"NoteScreenViewController"}} />
      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'UserCenter'}
        systemIcon="search"
        onPress={() => {
          this.setState({
            selectedTab:'UserCenter'
          });
        }}>
      <NavigatorIOS style={styles.container} initialRoute={{component:UserCenterScreen,title:"UserCenterViewController"}} />
      </TabBarIOS.Item>

     </TabBarIOS>
   )
 }


 /*****NavigationIOS*****/
 /*render(){
    return(
      <NavigatorIOS style={styles.container}
          initialRoute={{
            component:RootScreen,
            title:'My Root',
          }}/>
    );
 */

    // <Navigator
    //      initialRoute={{name:'root'}}
    //      renderScene={this.renderSearchRoute}
    // />

  //}

  //  renderSearchRoute(route,navigator){
   //
  //     if(route.name == 'root'){
  //       return <RootScreen navigator={navigator}/>
  //     }
   //
  //     if(route.name == 'createNode'){
  //       return <NoteScreen navigator={navigator}/>
  //     }
  //  }

  // renderSearchRoute(route,navigator){
  //
  //   switch (route.name)
  //   {
  //     case  'root':
  //           return(
  //             <RootScreen />
  //           );
  //     case 'createNode':
  //       return(
  //           <NoteScreen />
  //       );
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  navContainer:{
    flex:1,
  },
  navBar:{
    flex:1,
    backgroundColor:'#5B29C1',
    borderBottomColor:'#48209A',
    borderBottomWidth:1,
  }
});



AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
