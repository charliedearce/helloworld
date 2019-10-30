import React, {Component} from 'react';
import {LoginWrapper} from '../../components/container/login-wrapper';


export default class ClientBook extends Component<any> {

    render() {
        return (
            <LoginWrapper title="Book">
                <a href="/client/login">Back</a>
            </LoginWrapper>
        )
    }
}