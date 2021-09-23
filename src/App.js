import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
              <Route path="/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
