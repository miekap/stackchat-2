import React, { Component } from 'react';
import NameEntry from './NameEntry';
import { connect } from 'react-redux'


function Navbar(props, ownProps) {

  const channelId = Number(props.match.params.channelId);

  return (
    <nav>
      <h3>{props.channels.length ? props.channels.filter(channel => channel.id == channelId)[0].name : 'Create Channel'}</h3>
      <NameEntry />
    </nav>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    channels: state.channels,
    ownProps
  };
}

const connectedNavbar = connect(mapStateToProps)(Navbar)

export default connectedNavbar;
