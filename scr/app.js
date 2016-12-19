import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class app extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB8toAuqnIq1ZacIcRB1D9I6_MrbAWo03E',
            authDomain: 'authentication-6c742.firebaseapp.com',
            databaseURL: 'https://authentication-6c742.firebaseio.com',
            storageBucket: 'authentication-6c742.appspot.com',
            messagingSenderId: '215894065407'
        });
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Header headerText="Auth"/>
            </View>
        );
    }
}

export default app;
