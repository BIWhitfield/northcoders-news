import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'bulma/css/bulma.css';

import Home from './Home';
import TopicsHeader from './TopicsHeader';
import TopicPage from './TopicPage';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className="App">
      <Header />
      <div className="container">
        <div className="notification" />
      </div>
      <div className="component-TopicsHeader">
        <TopicsHeader />
      </div>
      <div className="container">
        <div className="notification" />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/articles/:topic_slug" component={TopicPage} />
      <Route path="/article/:article_id" component={Article} />
      <Footer />
    </div>
  </Router>
    );


App.propTypes = {
};

export default App;
