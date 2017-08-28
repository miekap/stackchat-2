import React, { Component } from 'react';
import NameEntry from './NameEntry';
import { connect } from 'react-redux'


function Navbar(props, ownProps) {

  const channelId = Number(props.match.params.channelId);
  let title = '';
    if (channelId) {
      if (props.channels.length) title = props.channels.filter(channel => channel.id == channelId)[0].name;
    }
    else {
      if (props.newChannelEntry) title = props.newChannelEntry;
      else title = 'Create Channel';
    }

  return (
    <nav>
      <h3>{title}</h3>
      <NameEntry />
    </nav>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    channels: state.channels,
    newChannelEntry: state.newChannelEntry,
    ownProps
  };
}

const connectedNavbar = connect(mapStateToProps)(Navbar)

export default connectedNavbar;
