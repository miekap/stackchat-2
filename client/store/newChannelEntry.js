import axios from 'axios';
import socket from '../socket';

// ACTION TYPES

const WRITE_CHANNEL = 'WRITE_CHANNEL'

// ACTION CREATORS

export function writeChannel(channelName) {
    const action = { type: WRITE_CHANNEL, channelName };
    return action;
}

// REDUCER

export default function newChannelReducer(state = '', action) {

    switch (action.type) {
        case WRITE_CHANNEL:
            return action.channelName;

        default:
            return state;
    }

}

