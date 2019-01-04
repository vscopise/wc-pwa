import React, { Component  } from 'reactn';
import './App.css';
import Products from './Components/Products'

class App extends Component {

  componentDidMount() {
    if(!localStorage.getItem('jwtToken')){
      this.global.fetchToken();
    } else {
      this.setGlobal({
        jwtToken: localStorage.getItem('jwtToken'),
        isLoading: false,
      });
    }
  }

  componentWillUpdate() {
    localStorage.setItem('jwtToken', this.global.jwtToken);
  }

  render() {
    return (
      <div className="App">
        {
          !this.global.isLoading && <Products/>
        }
        {
          this.global.isLoading && <span>Cargando...</span>
        }
      </div>
    );
  }
  
}

export default App;
