import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from './components/pages/Login';
import Navbar from './components/layout/Navbar';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFount from './components/pages/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/contacts" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
          <Route component={NotFount} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
