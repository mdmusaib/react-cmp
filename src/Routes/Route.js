import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Select from '../Select/SelectComponent';
  import Table from '../Table/Table';
  
  export default function Routes() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/select">Select</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/select">
              <Select />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }