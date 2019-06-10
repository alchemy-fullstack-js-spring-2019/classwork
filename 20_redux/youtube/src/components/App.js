import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import VideoPage from '../pages/VideoPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/video/:id" component={VideoPage} />
      </Switch>
    </Router>
  );
}
