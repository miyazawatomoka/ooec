import React, { Component, PropTypes } from 'react';
import styles from './ArticleContainer.less';
const ArticleContainer = React.createClass({
  getInitialState() {
    return{
      articleId : this.props.articleId,
      article: ''
    }
  },
  componentWillReceiveProps(nextProps){
    this.updateState(nextProps)
  },
  updateState(props){
    var that = this
    if (props){
      var articleId = props.articleId
    }else{
      var articleId = this.state.articleId
    }
    if(articleId){
      fetch('/json-data/article/'+ articleId +'.html').then(function(response) {
        if (response.status >= 400) {
          that.setState({
            article: ""
          })
          throw new Error("Bad response from server");
        }
        return response.text();
      })
      .then(function(stories) {
        that.setState({
          article: stories
        })
      })
    }else{
      that.setState({
        article: ""
      })
    }
  },
  componentDidMount() {
    this.updateState();
  },

  render(){
    return(
      <article dangerouslySetInnerHTML={{__html: this.state.article}} className={styles.text}>

      </article>
    )
  }


})


export default ArticleContainer;
