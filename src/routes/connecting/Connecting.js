import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import {connectToWebsocket} from './connectToWebsocket';

class Connecting extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ip: 'echo.websocket.org', port: '8080' };
    }

    render () {
        return (
            <View style={{flexDirection: 'column', height: '60%', width: '100%', padding: 5}}>
                <Text 
                    style={{height: 20, textAlign: 'center'}}>
                    Input IP address and port number
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                    onChangeText={(ip) => this.setState({ip})}
                    value={this.state.ip}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                    onChangeText={(port) => this.setState({port})}
                    value={this.state.port}
                    type='number'
                />
                <Button
                    onPress={() => {this.props.connectToWebsocket(this.state);}}
                    title="Connect"
                    disabled={this.props.connected || this.props.connecting}
                    color="#841584"
                    accessibilityLabel="Button for establishing connection"
                />
                <Text 
                    style={{height: 20, marginTop: 10, textAlign: 'center'}}>
                    {this.props.connecting && 'connecting...'}
                </Text>
                <Text 
                    style={{height: 20, marginTop: 10, textAlign: 'center'}}>
                    {this.props.connected && 'connected'}
                </Text>
                <Text
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, textAlign: 'center'}}>
                    Latest message received: {this.props.lastMessage}
                </Text>
            </View>
        );
    }
}

export {Connecting};