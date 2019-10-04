import React from 'react';
import meta from './lib/meta';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PubSub from 'pubsub-js';
import events from './lib/events';
import Alert from './UIComponents/Alert/Alert'

import NoMatch from "./pages/404";
import Login from "./pages/Login";
import Activist from "./pages/Activist";
import Browse from "./pages/Browse";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertQueue: []
    };
    PubSub.subscribe(events.alert, function (msg, data) {
      this.alert(data)
    }.bind(this));
    PubSub.subscribe(events.clearAlert, function (msg, data) {
      this.clearAlert(data)
    }.bind(this));
  }

  componentWillUnmount() {
    PubSub.clearAllSubscriptions();
  }

  alert(alert) {
    let alertQueue = this.state.alertQueue.slice();
    if(alert.flush){
      alertQueue = [alert];
    }
    else{
      alertQueue.push(alert);
    }
    this.setState({alertQueue});
  }

  clearAlert(options) {
    let alertQueue = this.state.alertQueue.slice();
    if(options.clearAll){
      alertQueue = [];
    }
    else{
      alertQueue.splice(0, 1);
    }
    this.setState({alertQueue});
  }

  render() {
    return (
        <Router>
          <div>
            <meta/>
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/profile" component={Activist}/>
              <Route path="/browse" exact component={Browse}/>
              <Route component={NoMatch}/>
            </Switch>
            <Alert setQueue={(alertQueue)=>this.setState({alertQueue})} queue={this.state.alertQueue}/>
          </div>
        </Router>
    );
  }
}