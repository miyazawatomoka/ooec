import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';
import Nav from './Nav/Nav'


const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <div className={styles.headerBg} ></div>
      </header>
      <div className={styles.mainContainer}>
        <div className={styles.nav}>
          <Nav />
        </div>
        {children}
      </div>


    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
