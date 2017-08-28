import React, { Component } from 'react';
import {postChannel, writeChannel} from '../store'
import { connect } from 'react-redux'

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit} >
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const mapStateToProps = function (state) {
  return {
    newChannelEntry: state.newChannelEntry
  };
}

const mapDispatchToProps = function (dispatch, ownProps){
  return {
    handleChange: evt => dispatch(writeChannel(evt.target.value)),

    handleSubmit: evt => {
      evt.preventDefault()
      dispatch(postChannel({name: evt.target.channelName.value}, ownProps.history))
      console.log(ownProps)
      dispatch(writeChannel(''))
    }
  }
}

const connectedChannelEntry = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)

export default connectedChannelEntry;
