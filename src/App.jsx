import React from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import SmartphonesPage from './Components/SmartphonesPage/SmartphonesPage';
import SmartphonesDetails from './Components/SmartphonesDetails/SmartphonesDetails';
import CartPage from './Components/CartPage/CartPage';

import './App.scss';
import Contacts from './Components/Contacts/Contacts';

const App = () => {


  return (
    <div className={`app`}>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/smartphones" exact component={SmartphonesPage} />
          <Route path="/smartphones/:id/" component={({ match }) => <SmartphonesDetails id={match.params.id} />} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
