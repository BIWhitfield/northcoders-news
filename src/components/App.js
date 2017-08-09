import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'bulma/css/bulma.css';

import Home from './Home';
import TopicsHeader from './TopicsHeader';
import TopicPage from './TopicPage';
import Article from './Article';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className="App">
      <TopicsHeader />
      <div className="columns" >
        <div className="column" />
        <div className="column is-half" />
        <div className="column" />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/articles/:topic_slug" component={TopicPage} />
      <Route path="/article/:article_id" component={Article} />
    </div>
  </Router>
    );


App.propTypes = {
};

export default App;
