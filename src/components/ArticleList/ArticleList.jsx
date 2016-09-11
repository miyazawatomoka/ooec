import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Row, Col, Menu, Icon} from 'antd';
import styles from './ArticleList.less';
const ArticleList = React.createClass({
  getInitialState(){
    return {
      list: [],
      article: {
        title: '',
        text: ''
      },
      type: this.props.type,
      articleId: this.props.articleId
    }
  },
  componentDidMount(){
    var type = this.props.params.type,
        articleId = this.props.params.articleId,
        that = this;
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
    if(articleId){
      fetch('/json-data/article/'+ articleId +'.json').then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(stories) {
        that.setState({
          article: stories
        })
      })
    }else{
      that.setState({
        article: {
          title: '',
          text: ''
        }
      })
    }
  },
  render() {
    var listItems = []
    this.state.list.forEach(function(element){
      listItems.push(
        <Menu.Item key={element.articleId}>{element.title}</Menu.Item>
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
              <article>
                <div class={styles.title}>
                  <h1>{this.state.article.title}</h1>
                </div>
                <div class={styles.text}>
                  {this.state.article.text}
                </div>
              </article>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
})

export default ArticleList;
