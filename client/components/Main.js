import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
import NewChannelEntry from './NewChannelEntry';
import store, { fetchMessages, fetchChannels } from '../store';

export default class Main extends Component {

  componentDidMount () {
    const messagesThunk = fetchMessages();
    store.dispatch(messagesThunk);
    const channelsThunk = fetchChannels();
    store.dispatch(channelsThunk);
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Route exact path="/channels/:channelId" component={Navbar} />
        <Route exact path="/:whatever" component={Navbar} />
        <main>
          <Switch>
            <Route path="/new-channel" component={NewChannelEntry} />
            <Route path="/channels/:channelId" component={MessagesList} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}
