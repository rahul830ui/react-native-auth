import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class app extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB8toAuqnIq1ZacIcRB1D9I6_MrbAWo03E',
            authDomain: 'authentication-6c742.firebaseapp.com',
            databaseURL: 'https://authentication-6c742.firebaseio.com',
            storageBucket: 'authentication-6c742.appspot.com',
            messagingSenderId: '215894065407'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );

            case false:
                return <LoginForm />;

            default:
                return (
                    <View style={{ justifyContent: 'center', marginTop: 200 }}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                {this.renderContent()}
            </View>
        );
    }
}

export default app;
