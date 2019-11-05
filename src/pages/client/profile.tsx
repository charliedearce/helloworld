import React, {Component} from 'react';
import {LoginWrapper} from '../../components/container/login-wrapper';

export default class ClientProfile extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Profile">
                <a href="/client/login">Back</a>
            </LoginWrapper>
        )
    }
}