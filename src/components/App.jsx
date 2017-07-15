import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx'
import Search from './github/Search.jsx'
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      userName: 'lordsanti92',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          userData: data
        })
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          username:null
        })
        alert(err)
      }.bind(this)
    })
  }
  getUserRepos(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          userRepos: data
        })
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          username:null
        })
        alert(err)
      }.bind(this)
    })
  }
  handleFormSubmit(username){
    this.setState({
      userName: username
    },function() {
      this.getUserData();
      this.getUserRepos();
    })
  }
  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }
  render(){
    return <div>
              <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
              <Profile {...this.state}/>
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
