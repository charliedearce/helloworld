import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput, IonIcon,
    IonRow, IonCol, IonGrid, IonRouterLink, IonButton, IonText
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import {connect} from 'react-redux';
import * as actions from "../../services/store/auth/actions";
import Swal from "sweetalert2";
import SimpleReactValidator from "simple-react-validator";
import Auth from "../../services/helpers/auth";
import { Plugins } from '@capacitor/core';
import {logoFacebook} from "ionicons/icons";


interface myState {
    isSignedIn: boolean,
    email: string,
    password: string,
    fbData: any
}

class Login extends Component<any, myState> {
    private validator: SimpleReactValidator;

    constructor(props: any) {
        super(props);

        this.state = {
            isSignedIn: false,
            email: '',
            password: '',
            fbData: []
        }

        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    async getUserInfo(data: any) {
        const response = await fetch(``);
        const fb = await response.json();
        this.setState({
            fbData: fb
        })
    }

    componentDidMount = () => {
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

        if(prevProps.facebook !== this.props.facebook){

            this.props.socialLogin({
                email: this.props.facebook.email,
                social_id: this.props.facebook.id,
                display_name: this.props.facebook.name,
                image: this.props.facebook.picture.data.url
            })
        }
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

    async signIn(): Promise<void> {
        const { history } = this.props;
        const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
        const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
        if (result && result.accessToken) {
            // this.getUserInfo(result.accessToken);
            this.props.getFbData(result.accessToken)
        }
    }

    render() {
        this.validator.purgeFields();

        return (
            <LoginWrapper title="Sign in">

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
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonButton className="ion-margin-vertical" onClick={() => this.signIn()}  size="large"
                                       shape="round" expand="block">
                                <IonIcon icon={logoFacebook}/>&nbsp;&nbsp; Login with FaceBook
                            </IonButton>
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
        facebook: state.auth.facebook
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        socialLogin: (data: any) => dispatch(actions.socialLogin(data)),
        Login: (data: any) => dispatch(actions.Login(data)),
        getFbData: (data: any)  => dispatch(actions.getFbData(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);