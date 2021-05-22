import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import SmartphonesPage from './Components/SmartphonesPage/SmartphonesPage';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/smartphones"  component={SmartphonesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
