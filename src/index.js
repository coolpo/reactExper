import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router";

import Statepage from "./views/stapage";
import Propage from './views/propage';
import Mypromise from './views/propage';

ReactDOM.render((
  <Router>
    <Route path="/" component={Propage}>
      <Route path="statepage" component={Statepage} />
      <Route path="mypromise" component={Mypromise} />
    </Route>
  </Router>
), document.getElementById('app'));
