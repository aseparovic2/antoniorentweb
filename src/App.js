import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Preloader from './components/layouts/Preloader';
import Hometwo from './components/pages/Hometwo';
import Roomlist from './components/pages/Roomlist';
import Roomdetails from './components/pages/Roomdetails';
import Contact from './components/pages/Contact';

function App() {
  return (
      <Router>
        { <Preloader />}
        <Switch>
          <Route exact path='/' component={Hometwo} />
          <Route path='/offer/:id' component={Roomlist} />
          <Route path='/details/:id' component={Roomdetails} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
  );
}

export default App;
