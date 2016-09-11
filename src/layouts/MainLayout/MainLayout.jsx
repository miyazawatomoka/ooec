import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';


const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <div className={styles.headerBg} ></div>
      </header>
      <div className={styles.mainContainer}>
        {children}
      </div>


    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
