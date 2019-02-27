import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Favorites from "./components/favorites";
import Search from "./components/search";
import GifDetails from "./components/gif.details";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/gifs/:id" component={GifDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
