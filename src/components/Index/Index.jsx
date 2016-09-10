import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';
import ListCard from './ListCard'
import styles from './Index.less';
require('es6-promise').polyfill();
require('isomorphic-fetch');


const Index = React.createClass({
  getInitialState(){
    return {
      indexListObject: new Array(
        {
          title: "",
          moreLink: "",
          list: []
        }
      )
    }
  },
  componentDidMount(){
    var that = this
    fetch('/json-data/index.json').then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function(stories) {
      that.setState({
        indexListObject: stories
      });
    });
  },
  render(){
    var rows = []
    var cols = []
    for (var i = 0; i < this.state.indexListObject.length; i++) {
      cols.push(
        <Col className={"gutter-row" + " " + styles.indexRow} span={8}>
          <div className="gutter-box">
            <ListCard cardInfo={this.state.indexListObject[i]} />
          </div>
        </Col>
      )
      if ( i%3 == 2 || i == this.state.indexListObject.length - 1 ) {
        rows.push(
          <Row gutter={16}>
            {cols}
          </Row>
        )
        cols = []
      }
    }
    return (
      <div>
        {rows}
      </div>
    )}
});


export default Index;
