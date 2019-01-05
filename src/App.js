import React, { Component  } from 'reactn';
import Products from './Components/Products';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import './App.css';

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
        <AppBar position="static">
          <Toolbar>
            <Menu
              open={false}
            >
              <MenuItem>
              </MenuItem>
            </Menu>
            <IconButton color="inherit">
              <Badge 
                badgeContent={null} 
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
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
