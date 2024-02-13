import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './Greeting';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to our home page.</p>
    <Link to="/greeting">Greeting Message</Link>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/greeting" component={Greeting} />
    </div>
  </Router>
);

export default App;
