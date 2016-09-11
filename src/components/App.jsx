import React, { Component, PropTypes } from 'react';
// import Todos from './Todos/Todos';
import { Router, Route, IndexRoute, Link } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Index from './Index/Index'
const App = React.createClass({
  render() {
    return (
      <MainLayout>
        <div>
          {this.props.children}
        </div>
      </MainLayout>
    )}
});

App.propTypes = {
};

export default App;
