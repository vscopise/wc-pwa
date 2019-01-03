import React, { Component  } from 'reactn';
import './App.css';
import Products from './Components/Products'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jwtToken: ''
    };
    
  }

  componentDidMount() {
    if(!localStorage.getItem('jwtToken')){
      this.setState({
        jwtToken: this.fetchToken()
      });
      //this.fetchToken();
    } else {
      this.setState({
        jwtToken: localStorage.getItem('jwtToken')
      });
    }

  }
  componentWillUpdate(nextProps,nextState) {
    localStorage.setItem('jwtToken', nextState.jwtToken);
  }

  fetchToken() {
    fetch(this.global.apiUrl + 'jwt-auth/v1/token', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({
        username: this.global.username,
        password: this.global.password
      })
    })
    .then(res => res.json())
    .then(data => {return data})
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.jwtToken && <Products jwtToken={this.state.jwtToken}/>
        }
      </div>
    );
  }
}

export default App;
