import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import SmartphonesPage from './Components/SmartphonesPage/SmartphonesPage';
import SmartphonesDetails from './Components/SmartphonesDetails/SmartphonesDetails';
import CartPage from './Components/CartPage/CartPage';

import './App.scss';

const App = () => {

  const[theme,setTheme]=useState(JSON.parse(localStorage.getItem('theme')))

  return (
    <div className={`app`} data-theme={theme}>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/smartphones" exact component={SmartphonesPage} />
          <Route path="/smartphones/:id/" component={({ match }) => <SmartphonesDetails id={match.params.id} />} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
