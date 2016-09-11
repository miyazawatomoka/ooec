import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import Index from '../components/Index/Index'
import Article from '../components/Article/Article'
const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
      <IndexRoute component={Index} />
      <Route path="/:type" component={Article} />
      <Route path="/:type/:articleId" component={Article} />
    </Route>
    <Route path="/actived" component={App} />
    <Route path="/completed" component={App} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
