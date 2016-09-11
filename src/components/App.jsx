import React, { Component, PropTypes } from 'react';
// import Todos from './Todos/Todos';
import { Router, Route, IndexRoute, Link } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Index from './Index/Index'
import Nav from './Nav/Nav'
const App = React.createClass({
  render() {
    return (
      <MainLayout>
        <div>
          <Nav />
          {this.props.children}
        </div>
      </MainLayout>
    )}
});

App.propTypes = {
};

export default App;
