import React, { Component } from 'react';
import Home from "./components/Home/Home";
import Select from './components/Select/Select';
import ResultPage from './components/ResultPage/ResultPage';
// import './styles/general/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/select" exact component={Select} />
          <Route path="/result" exact component={ResultPage} />
          <Route path="/result/:genreID" exact component={ResultPage} />

        </Switch>

      </BrowserRouter>
    );              
  }
}

export default App;


      /* <Route path="/select" exact component={PickPage} />
          <Route path="/result" exact component={ResultPage} /> */