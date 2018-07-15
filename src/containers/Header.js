import React, { Component } from 'react';

import { PersistorContext } from '../contexts/Persistor';

class Header extends Component {
  logout = (persistor) => {
    persistor.purge();
    this.props.history.go('/login');
  }

  render() {
    return (
      <header className="header">
        <PersistorContext.Consumer>
        {
          persistor => (
            <button onClick={() => this.logout(persistor)}>Logout</button>
          )        
        }
        </PersistorContext.Consumer>
      </header>
    );
  }
}

export default Header;