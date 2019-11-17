import React, {Component} from 'react';
import {
    IonItem, IonLabel, IonInput,
    IonRow, IonCol, IonGrid, IonButton,
    IonSelect, IonSelectOption, IonText, IonIcon
} from '@ionic/react';
import {LoginWrapper} from '../../../components/container/login-wrapper';
import {arrowBack, list} from "ionicons/icons";
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
    license_number: string
    license_state: string
    phone_number: string
    company: string
}

class TherapistReg extends Component<any, myState> {
    private validator: SimpleReactValidator;

    constructor(props: any){
        super(props);

        this.state = {
            email: '',
            password: '',
            c_password: '',
            first_name: '',
            last_name: '',
            license_number: '',
            license_state: '',
            phone_number: '',
            company: '',
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

    licenseNumberChange = (event: any) => {
        this.setState({license_number: event.detail.value});
    };

    licenseStateChange = (event: any) => {
        this.setState({license_state: event.detail.value});
    };

    phoneNumberChange = (event: any) => {
        this.setState({phone_number: event.detail.value});
    };

    companyChange = (event: any) => {
        this.setState({company: event.detail.value});
    };

    submitHandler = (e: any) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            this.props.therapistRegister(this.state)
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
                    'Turn ON your ON SITE STATUS to receive massage request from the client. ',
                    'success'
                )
                window.location.replace("/therapist/booking");
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

        return (
            <LoginWrapper title="Therapist Registration" back={true} backHref="/">
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
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Email address</IonLabel>
                                    <IonInput type="text" onIonChange={this.emailChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Email address', this.state.email, 'required|email')}
                                <IonItem>
                                    <IonLabel position="floating">First Name</IonLabel>
                                    <IonInput type="text" onIonChange={this.firstNameChange}></IonInput>
                                </IonItem>
                                {this.validator.message('First Name', this.state.first_name, 'required|alpha_space')}
                                <IonItem>
                                    <IonLabel position="floating">Last Name</IonLabel>
                                    <IonInput type="text" onIonChange={this.lastNameChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Last Name', this.state.last_name, 'required|alpha_space')}
                                <IonItem>
                                    <IonLabel position="floating">Phone Number</IonLabel>
                                    <IonInput onIonChange={this.phoneNumberChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Phone Number', this.state.phone_number, 'required|numeric')}
                                <IonItem>
                                    <IonLabel position="floating">Massage License Number</IonLabel>
                                    <IonInput onIonChange={this.licenseNumberChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Massage License Number', this.state.license_number, 'required|alpha_num_dash')}
                                <IonItem>
                                    <IonLabel position="floating">Licensed State</IonLabel>
                                    <IonInput onIonChange={this.licenseStateChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Licensed State', this.state.license_state, 'required|alpha_space')}
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
                                <IonItem className="ion-margin-top ion-margin-bottom">
                                    <IonLabel position="floating">What company are you contracted or employed by? </IonLabel>
                                    <IonInput type="text" onIonChange={this.companyChange}></IonInput>
                                </IonItem>
                                {this.validator.message('Company', this.state.company, 'required')}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="12" className="ion-margin-top ion-text-center">
                                <IonText color="medium">
                                    By clicking Signup, I agree to Winning Hands <a href="#">Terms of service</a> and <a href="#">Privacy policy</a>.
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
        therapistRegister: (data: any) => dispatch(actions.therapistRegister(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TherapistReg);