import React, {Component} from 'react';
import {
    IonRow,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonText,
    IonTitle,
    IonContent,
    IonCol,
    IonItem,
    IonLabel, IonInput, IonPage
} from '@ionic/react';

import SimpleReactValidator from "simple-react-validator";
import * as actions from "../../services/store/profile/actions";
import Swal from "sweetalert2";
import {connect} from "react-redux";

interface myState {
    password: string,
    new_password: string
    c_password: string
}

class ChangePassword extends Component<any, myState> {
    private validator: SimpleReactValidator;
    private baseState: any;
    constructor(props: any){
        super(props);
        this.state = {
            password: '',
            new_password: '',
            c_password: ''
        }
        this.baseState = this.state

        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    passwordChange = (event: any) => {
        this.setState({password: event.detail.value});
    };

    new_passwordChange = (event: any) => {
        this.setState({new_password: event.detail.value});
    };

    con_passwordChange = (event: any) => {
        this.setState({c_password: event.detail.value});
    };

    submitHandler = (e: any) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.changePassword(this.state)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<myState>, snapshot?: any): void {
        if(prevProps.errMessage !== this.props.errMessage){
            if(this.props.errMessage.message === 'password updated'){
                Swal.fire(
                    'Password Changed',
                    'Your password has been successfully changed.',
                    'success'
                )
                this.setState(this.baseState);
            } else {
                Swal.fire(
                    'Input Error',
                    '' + this.props.errMessage.message + '',
                    'error'
                )
            }
        }
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/therapist/profile"/>
                        </IonButtons>
                        <IonButtons slot="end" onClick={this.submitHandler}>
                            <IonText color="danger">
                                Save
                            </IonText>
                        </IonButtons>
                        <IonTitle>Change Password</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Current Password</IonLabel>
                                <IonInput type="password" onIonChange={this.passwordChange} value={this.state.password}></IonInput>
                            </IonItem>
                            {this.validator.message('Password', this.state.password, 'required')}
                            <IonItem>
                                <IonLabel position="floating">New Password</IonLabel>
                                <IonInput type="password" onIonChange={this.new_passwordChange} value={this.state.new_password}></IonInput>
                            </IonItem>
                            {this.validator.message('Password', this.state.new_password, 'required|min:6')}
                            <IonItem>
                                <IonLabel position="floating">Confirm Password</IonLabel>
                                <IonInput type="password" onIonChange={this.con_passwordChange} value={this.state.c_password}></IonInput>
                            </IonItem>
                            {this.validator.message('Confirm_password', this.state.c_password, `required|in:${this.state.new_password}`, {messages: {in: 'Passwords doesn\'t match'}})}
                        </IonCol>
                    </IonRow>
                </IonContent>
            </IonPage>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        errMessage: state.profile.errMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changePassword: (data: any) => dispatch(actions.changePassword(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);