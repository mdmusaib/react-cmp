import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Select from '../Select/SelectComponent';
  import Table from '../Table/Table';
  import Profile from '../Profile/FilterMultiSelect';
  import MultipleSelect from '../Select/test';
  import './styles.css';
  export default function Routes() {
    return (
      <Router>
        <div>
          <nav>
            <ul style={{display:'inline-flex'}}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/select">Select</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
              <li>
                <Link to="/profile">Profiles</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/select">
              <Select />
              {/* <MultipleSelect/> */}
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route exact="/profile" path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }