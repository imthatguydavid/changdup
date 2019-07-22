import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import WeddingDetails from './components/WeddingDetails/WeddingDetails';
import WishingWell from './components/WishingWell/WishingWell';
import WeddingParty from './components/WeddingParty/WeddingParty';
import WhereToStay from './components/WhereToStay/WhereToStay';
import NotFound from './components/NotFound';

const routing = (
  <Router>
    <div>
      <div className="header">
        <Link to="/" className="homeNav"><h3>Erica & Joseph</h3></Link>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Wedding-Details">Wedding Details</Link>
          </li>
          <li>
            <Link to="/Wedding-Party">Wedding Party</Link>
          </li>
          <li>
            <Link to="/travel">Where To Stay</Link>
          </li>
          <li>
            <Link to="/Wishing-Well">Wishing Well</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Wedding-Details" component={WeddingDetails} />
        <Route path="/Wishing-Well" component={WishingWell} />
        <Route path="/Wedding-Party" component={WeddingParty} />
        <Route path="/travel" component={WhereToStay} />
        <Router component={NotFound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));