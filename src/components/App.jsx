import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      userName: 'lordsanti92',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
  render(){
    return <div>
              {this.props.clientId}
            </div>
  }
}
App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}
App.defaultProps = {
  clientId: '133d2c7290e90d11194c',
  clientSecret: 'facac27c5fbbf613676a31d07f594e2695a1a9e1'
}
export default App
