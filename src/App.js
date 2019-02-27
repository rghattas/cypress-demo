import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Search from "./components/Search";
import GifDetails from "./components/GifDetails";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/gifs/:id" component={GifDetails} />
          <Redirect from="/" to="/search" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
