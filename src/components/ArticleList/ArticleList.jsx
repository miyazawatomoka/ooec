import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Row, Col, Menu, Icon} from 'antd';
import ArticleContainer from './ArticleContainer'
import styles from './ArticleList.less';
const ArticleList = React.createClass({
  getInitialState(){
    return {
      list: [],
      type: this.props.params.type,
      articleId: this.props.params.articleId
    }
  },
  componentDidMount(){
    var type = this.props.params.type,
        articleId = this.props.params.articleId,
        that = this;
    this.setState({
      type: this.props.params.type,
      articleId: this.props.params.articleId,
    })
    if(type){
      fetch('/json-data/type/'+ type +'.json').then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(stories) {
        that.setState({
          list: stories
        })
      })
    }else{

    }
  },
  render() {
    var listItems = []
    var type = this.state.type
    this.state.list.forEach(function(element){
      var linkToAddr = '/'+ type + '/' + element.articleId
      listItems.push(
        <Menu.Item key={element.articleId}><Link to={linkToAddr}>{element.title}</Link></Menu.Item>
      )
    })
    return(
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Menu>
                {listItems}
              </Menu>
            </div>
          </Col>
          <Col className="gutter-row" span={18}>
            <div className="gutter-box">
              <ArticleContainer articleId={this.state.articleId}></ArticleContainer>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
})

export default ArticleList;
