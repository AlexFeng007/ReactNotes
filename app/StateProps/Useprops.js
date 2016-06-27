export default class Useprops extends React.Component{

  constructor(){
    super();
    this.state = {name:"will"};
  }

  render(){
    setTimeout(() => {
      this.setState({name:"Bob"})
    },1000)
    return(
      <div>
        {this.state.name}
      </div>
    )
  }

}
