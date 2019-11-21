import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput,
    IonRow, IonCol, IonGrid, IonRouterLink, IonButton, IonText
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import {connect} from 'react-redux';
import * as actions from "../../services/store/auth/actions";
import Swal from "sweetalert2";
import SimpleReactValidator from "simple-react-validator";
import Auth from "../../services/helpers/auth";
import {GoogleLogin} from 'react-google-login';
interface myState {
    isSignedIn: boolean,
    email: string,
    password: string
}

class Login extends Component<any, myState> {
    private validator: SimpleReactValidator;

    constructor(props: any) {
        super(props);

        this.state = {
            isSignedIn: false,
            email: '',
            password: ''
        }

        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    uiConfig = {
        signInFlow: "redirect",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.props.socialLogin({
                email: firebase.auth().currentUser.email,
                social_id: firebase.auth().currentUser.uid,
                display_name: firebase.auth().currentUser.displayName,
                image: firebase.auth().currentUser.photoURL
            })
        })
        if (Auth.isAuthenticated()) {
            if(this.props.location.pathname === '/'){
                if (JSON.parse(localStorage.getItem('login'))['type'] === 1) {
                    window.location.replace("/client/booking");
                } else {
                    window.location.replace("/therapist/booking");
                }
            }
        }
    }

    submitHandler = (e: any) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.Login(this.state)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    emailChange = (event: any) => {
        this.setState({email: event.detail.value});
    };

    passwordChange = (event: any) => {
        this.setState({password: event.detail.value});
    };

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.props.token)
        if (prevProps.token !== this.props.token) {
            if (this.props.token.access_token) {
                localStorage.setItem('login', JSON.stringify(this.props.token))
                if (this.props.token.type === 1) {
                    window.location.replace("/client/booking");
                } else {
                    window.location.replace("/therapist/booking");
                }
            } else {
                Swal.fire(
                    'Invalid Account',
                    'Either username/password is incorrect.',
                    'error'
                )
            }
        }
    }

    render() {
        this.validator.purgeFields();

        return (
            <LoginWrapper title="Sign in">
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={() =>alert('wow')}
                    onFailure={() =>alert('eww')}
                    cookiePolicy={'single_host_origin'}
                />
                <IonGrid>
                    <form onSubmit={this.submitHandler}>
                        <IonRow>
                            <IonCol>
                                <div className="ion-text-center ion-margin-bottom ion-margin-top">
                                    <img src="https://img.penpenn.com/8o8075.png" alt="logo"/>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Email address</IonLabel>
                                    <IonInput onIonChange={this.emailChange} value={this.state.email}></IonInput>
                                </IonItem>
                                {this.validator.message('Email address', this.state.email, 'required|email')}
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" onIonChange={this.passwordChange}
                                              value={this.state.password}></IonInput>
                                </IonItem>
                                {this.validator.message('Password', this.state.password, 'required')}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right ion-padding-vertical">
                                <IonRouterLink color="primary" routerLink="/forgot-password">
                                    Forgot password?
                                </IonRouterLink>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" size="large"
                                           shape="round"
                                           color="primary" className="ion-margin-vertical"
                                           type="submit"
                                >
                                    Sign in
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton expand="block" size="large"
                                           shape="round"
                                           color="success" className="ion-margin-vertical"
                                           routerLink="/client/registration"
                                >
                                    Sign up
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </form>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonText>OR</IonText>

                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </LoginWrapper>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        socialLogin: (data: any) => dispatch(actions.socialLogin(data)),
        Login: (data: any) => dispatch(actions.Login(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);