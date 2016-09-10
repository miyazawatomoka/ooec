import React, { Component, PropTypes } from 'react';
// import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Index from './Index/Index'
const App = () => {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
