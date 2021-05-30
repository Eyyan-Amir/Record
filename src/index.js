import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Record from './component/Record';
import reportWebVitals from './reportWebVitals';

const Routing = () =>{
  return <Router>
    <Switch>
      <Route path='/' exact render={(routeProps) => <App {...routeProps} />} />
      {/* //render method // */}
      <Route path='/Record' exact component={Record} />
      {/* // component Method //  */}
    </Switch>
  </Router>
}

ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
