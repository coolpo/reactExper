import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Statepage from "./views/stapage";
import Propage from './views/propage';
import Mypromise from './views/mypromise';

ReactDOM.render((
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Propage}></Route>
        <Route path="/statepage" component={Statepage} />
        <Route path="/mypromise" component={Mypromise} />
      </Switch>
    </div>


  </HashRouter>
), document.getElementById('app'));
