import React, { Component, PropTypes } from 'react';
import styles from './ArticleContainer.less';
const ArticleContainer = React.createClass({
  getInitialState() {
    return{
      articleId : this.props.articleId,
      article: {
        title: '',
        text: ''
      }
    }
  },

  componentDidMount() {
    var articleId = this.state.articleId;
    var that = this
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

  render(){
    return(
      <article>
        <div class={styles.title}>
          <h1>{this.state.article.title}</h1>
        </div>
        <div class={styles.text}>
          {this.state.article.text}
        </div>
      </article>
    )
  }


})


export default ArticleContainer;
