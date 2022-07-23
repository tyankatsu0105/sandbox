import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const Home = () => (
  <div>
    <h1>home</h1>
    <p>
      <ReactRouterDOM.Link to="/login">login</ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/register">register</ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/settings">settings</ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/article/1">article</ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/editor">editor</ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/editor/the-boys">
        editor/article
      </ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/@somebody-profile">profile</ReactRouterDOM.Link>
    </p>
    <p>
      <ReactRouterDOM.Link to="/@somebody-profile/favorites">
        profile/favorites
      </ReactRouterDOM.Link>
    </p>
  </div>
);

export default Home;
