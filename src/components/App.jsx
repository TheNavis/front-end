import React, { Component } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from '../containers/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Main />
        <Footer />
      </div>
    );
  }
}

module.exports = App;