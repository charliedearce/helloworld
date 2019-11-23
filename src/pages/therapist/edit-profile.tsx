import React, {Component, createRef, RefObject} from 'react';
import {
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonItem,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    IonIcon, IonLabel, IonTextarea, IonInput
} from '@ionic/react';
import {camera} from 'ionicons/icons';
import SimpleReactValidator from "simple-react-validator";
import * as actions from "../../services/store/profile/actions";
import Swal from "sweetalert2";
import {connect} from "react-redux";

interface myState {
    email: string,
    first_name: string
    last_name: string
    license_number: string
    license_state: string
    phone_number: string
    company: string
    image: string
    bio: string
}

class TherapistProfileEdit extends Component<any, myState> {
    private validator: SimpleReactValidator;

    constructor(props: any){
        super(props);
        const data = new URLSearchParams(this.props.location.search)
        let val = JSON.parse(atob(data.get('data')));
        if(!val){
            return this.props.history.push('/therapist/profile');
        }
        this.state = {
            email: val.email,
            first_name: val.first_name,
            last_name: val.last_name,
            license_number: val.license_number,
            license_state: val.license_state,
            phone_number: val.phone_number,
            company: val.company,
            image: val.image,
            bio: val.bio
        }

        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    uploadImg = () => {
        // @ts-ignore
        document.getElementById("selectImage").click()
    }

    emailChange = (event: any) => {
        this.setState({email: event.detail.value});
    };

    bioChange = (event: any) => {
        this.setState({bio: event.detail.value});
    };

    imageChange = (event: any) => {
        this.props.uploadImage(event.target.files[0])
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

    submitHandler = () => {
        if (this.validator.allValid()) {
            this.props.updateProfile(this.state);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<myState>, snapshot?: any): void {
        if(prevProps.image !== this.props.image){
            this.setState({
                image: this.props.image.image
            })
        }

        if(prevProps.errMessage !== this.props.errMessage){
            if(this.props.errMessage.message === 'profile successfully updated'){
                Swal.fire(
                    'Profile Updated',
                    'Your changes was successfully saved.',
                    'success'
                )
                this.props.getProfile();
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
        console.log(this.props.image)
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/therapist/profile"/>
                        </IonButtons>
                        <IonButtons slot="end" onClick={()=>this.submitHandler()}>
                            <IonText color="danger">
                                Save
                            </IonText>
                        </IonButtons>
                        <IonTitle>Edit Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRow>
                        <IonCol className="ion-margin-vertical ion-text-center">
                            <div className="container-pp img-edit">
                                <img onClick={this.uploadImg}
                                     src={this.state.image ? this.state.image : '/assets/blank.png'}/>
                                <IonIcon className="btn" icon={camera}/>
                            </div>
                            <input id='selectImage' accept="image/jpeg, image/png" hidden type="file" onChange={this.imageChange}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Your Bio</IonLabel>
                                <IonTextarea rows={4} placeholder="Write your bio here..." onIonChange={this.bioChange} value={this.state.bio}></IonTextarea>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Email address</IonLabel>
                                <IonInput type="text" onIonChange={this.emailChange} value={this.state.email}></IonInput>
                            </IonItem>
                            {this.validator.message('Email address', this.state.email, 'required|email')}
                            <IonItem>
                                <IonLabel position="floating">First Name</IonLabel>
                                <IonInput type="text" onIonChange={this.firstNameChange} value={this.state.first_name}></IonInput>
                            </IonItem>
                            {this.validator.message('First Name', this.state.first_name, 'required|alpha_space')}
                            <IonItem>
                                <IonLabel position="floating">Last Name</IonLabel>
                                <IonInput type="text" onIonChange={this.lastNameChange} value={this.state.last_name}></IonInput>
                            </IonItem>
                            {this.validator.message('Last Name', this.state.last_name, 'required|alpha_space')}
                            <IonItem>
                                <IonLabel position="floating">Phone Number</IonLabel>
                                <IonInput onIonChange={this.phoneNumberChange} value={this.state.phone_number}></IonInput>
                            </IonItem>
                            {this.validator.message('Phone Number', this.state.phone_number, 'required|numeric')}
                            <IonItem>
                                <IonLabel position="floating">Massage License Number</IonLabel>
                                <IonInput onIonChange={this.licenseNumberChange} value={this.state.license_number}></IonInput>
                            </IonItem>
                            {this.validator.message('Massage License Number', this.state.license_number, 'required|alpha_num_dash')}
                            <IonItem>
                                <IonLabel position="floating">Licensed State</IonLabel>
                                <IonInput onIonChange={this.licenseStateChange} value={this.state.license_state}></IonInput>
                            </IonItem>
                            {this.validator.message('Licensed State', this.state.license_state, 'required|alpha_space')}
                            <IonItem className="ion-margin-top ion-margin-bottom">
                                <IonLabel position="floating">What company are you contracted or employed by? </IonLabel>
                                <IonInput type="text" onIonChange={this.companyChange} value={this.state.company}></IonInput>
                            </IonItem>
                            {this.validator.message('Company', this.state.company, 'required')}
                        </IonCol>
                    </IonRow>
                </IonContent>
            </IonPage>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        image: state.profile.image,
        errMessage: state.profile.errMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        uploadImage: (data: any) => dispatch(actions.uploadImage(data)),
        updateProfile: (data: any) => dispatch(actions.updateProfile(data)),
        getProfile: () => dispatch(actions.getProfile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TherapistProfileEdit);