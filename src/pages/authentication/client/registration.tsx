import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput,
    IonRow, IonCol, IonGrid, IonRouterLink, IonButton, IonText
} from '@ionic/react';
import {LoginWrapper} from '../../../components/container/login-wrapper';
import {connect} from 'react-redux';
import * as actions from "../../../services/store/auth/actions";
import Swal from "sweetalert2";
import SimpleReactValidator from "simple-react-validator";

interface myState {
    email: string,
    password: string
    c_password: string
    first_name: string
    last_name: string
}

class ClientReg extends Component<any, myState> {
    private validator: SimpleReactValidator;

    constructor(props: any){
        super(props);

        this.state = {
            email: '',
            password:'',
            c_password: '',
            first_name: '',
            last_name: ''
        }

        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    emailChange = (event: any) => {
        this.setState({email: event.detail.value});
    };

    passwordChange = (event: any) => {
        this.setState({password: event.detail.value});
    };

    c_passwordChange = (event: any) => {
        this.setState({c_password: event.detail.value});
    };

    firstNameChange = (event: any) => {
        this.setState({first_name: event.detail.value});
    };

    lastNameChange = (event: any) => {
        this.setState({last_name: event.detail.value});
    };

    submitHandler = (e: any) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.clientRegister(this.state)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.props.token)
        if (prevProps.token !== this.props.token) {
            if (this.props.token.access_token) {
                localStorage.setItem('login', JSON.stringify(this.props.token))
                Swal.fire(
                    'Successfully Registered',
                    'You can start book your favorite Therapist now.',
                    'success'
                )
                window.location.replace("/client/booking");
            } else {
                Swal.fire(
                    'Input Error',
                    '' + this.props.token.message + '',
                    'error'
                )
            }
        }
    }

    render() {
        return(
            <LoginWrapper title="Client Registration" back={true} backHref="/">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-center ion-margin-bottom ion-margin-top">
                                <img src="https://img.penpenn.com/8o8075.png" alt="logo"/>
                            </div>
                        </IonCol>
                    </IonRow>
                    <form onSubmit={this.submitHandler}>
                        <IonRow>
                            <IonCol size="12" className="ion-text-center">
                                <IonText color="medium">
                                    Your favorite therapist is one click away!
                                </IonText>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Email address</IonLabel>
                                    <IonInput onIonChange={this.emailChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Email address', this.state.email, 'required|email')}
                                <IonItem>
                                    <IonLabel position="floating">First name</IonLabel>
                                    <IonInput onIonChange={this.firstNameChange}></IonInput>
                                </IonItem>
                                {this.validator.message('First name', this.state.first_name, 'required|alpha_space')}
                                <IonItem>
                                    <IonLabel position="floating">Last name</IonLabel>
                                    <IonInput onIonChange={this.lastNameChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Last name', this.state.last_name, 'required|alpha_space')}
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="password" onIonChange={this.passwordChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Password', this.state.password, 'required|min:6')}
                                <IonItem>
                                    <IonLabel position="floating">Confirm Password</IonLabel>
                                    <IonInput type="password" onIonChange={this.c_passwordChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Confirm_password', this.state.c_password, `required|in:${this.state.password}`, {messages: {in: 'Passwords doesn\'t match'}})}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-margin-top ion-text-center ">
                                <IonText color="medium">
                                    <IonRouterLink routerLink="/therapist/registration">Sign up as Therapist</IonRouterLink>, to meet new clients fast!.
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-margin-vertical">
                                <IonButton expand="block" size="large"
                                           shape="round"
                                           color="primary"
                                           type="submit"
                                >
                                    Sign up
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </form>
                    <IonRow>
                        <IonCol className="ion-margin-top ion-text-center">
                            <IonText color="medium">
                                By clicking Signup, I agree to Winning Hands <a href="#">Terms of service</a> and <a href="#">Privacy policy</a>.
                            </IonText>
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
        clientRegister: (data: any) => dispatch(actions.clientRegister(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientReg);