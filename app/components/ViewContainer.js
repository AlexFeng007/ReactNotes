
import React,{Component,View} from 'react-native'

export default class ViewContainer extends Component{

    render(){
      return (
        <View style={styles.viewContainer}>
        {this.props.children}
        </View>
      )
    }
}

const styles = React.StyleSheet.create({

  viewContainer:{
    flex:1,
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"stretch"
  }
})
