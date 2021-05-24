import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import SmartphonesPage from './Components/SmartphonesPage/SmartphonesPage';
import SmartphonesDetails from './Components/SmartphonesDetails/SmartphonesDetails';
import CartPage from './Components/CartPage/CartPage';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/smartphones" exact component={SmartphonesPage} />
      <Route path="/smartphones/:id/"  component={({match})=> <SmartphonesDetails id={match.params.id} /> } />
      <Route path="/cart"  component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
