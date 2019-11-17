import React, {Component} from 'react';
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
    IonIcon, IonLabel, IonInput
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
    phone_number: string
    fave_casino: string
    fave_game: string
    image: string
}

class ClientEditProfile extends Component<any, myState> {
    private validator: SimpleReactValidator;

    constructor(props: any){
        super(props);
        const data = new URLSearchParams(this.props.location.search)
        let val = JSON.parse(data.get('data'));
        if(!val){
            return this.props.history.push('/client/profile');
        }

        this.state = {
            email: val.email,
            first_name: val.first_name,
            last_name: val.last_name,
            phone_number: val.phone_number,
            fave_casino: val.fave_casino,
            fave_game: val.fave_game,
            image: val.image,
        }

        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    uploadImg = () => {
        // @ts-ignore
        document.getElementById("selectImage").click()
    }

    imageChange = (event: any) => {
        this.props.uploadImage(event.target.files[0])
    };

    emailChange = (event: any) => {
        this.setState({email: event.detail.value});
    };

    firstNameChange = (event: any) => {
        this.setState({first_name: event.detail.value});
    };

    lastNameChange = (event: any) => {
        this.setState({last_name: event.detail.value});
    };

    phoneNumberChange = (event: any) => {
        this.setState({phone_number: event.detail.value});
    };

    faveCasinoChange = (event: any) => {
        this.setState({fave_casino: event.detail.value});
    };

    faveGameChange = (event: any) => {
        this.setState({fave_game: event.detail.value});
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

        if(prevProps.errMessage !== this.props.errMessage){ console.log(this.props.errMessage)
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
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/client/profile"/>
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
                            <div className="container-pp">
                                <div className="container-pp">
                                    <img onClick={this.uploadImg}
                                         src={this.state.image ? this.state.image : '/assets/blank.png'}/>
                                    <IonIcon className="btn" icon={camera}/>
                                </div>
                                <input id='selectImage' accept="image/jpeg, image/png" hidden type="file" onChange={this.imageChange}/>
                            </div>
                            <input id='selectImage' hidden type="file"/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput onIonChange={this.emailChange} value={this.state.email}></IonInput>
                            </IonItem>
                            {this.validator.message('Email', this.state.email, 'required|email')}
                            <IonItem>
                                <IonLabel position="floating">First Name</IonLabel>
                                <IonInput onIonChange={this.firstNameChange} value={this.state.first_name}></IonInput>
                            </IonItem>
                            {this.validator.message('First Name', this.state.first_name, 'required|alpha_space')}
                            <IonItem>
                                <IonLabel position="floating">Last Name</IonLabel>
                                <IonInput onIonChange={this.lastNameChange} value={this.state.last_name}></IonInput>
                            </IonItem>
                            {this.validator.message('Last Name', this.state.last_name, 'required|alpha_space')}
                            <IonItem>
                                <IonLabel position="floating">Phone Number</IonLabel>
                                <IonInput onIonChange={this.phoneNumberChange} value={this.state.phone_number}></IonInput>
                            </IonItem>
                            {this.validator.message('Phone Number', this.state.phone_number, 'required|numeric')}
                            <IonItem>
                                <IonLabel position="floating">Favorite Casino</IonLabel>
                                <IonInput onIonChange={this.faveCasinoChange} value={this.state.fave_casino}></IonInput>
                            </IonItem>
                            {this.validator.message('Favorite Casino', this.state.fave_casino, 'required|alpha_space')}
                            <IonItem>
                                <IonLabel position="floating">Favorite Game</IonLabel>
                                <IonInput onIonChange={this.faveGameChange} value={this.state.fave_game}></IonInput>
                            </IonItem>
                            {this.validator.message('Favorite Game', this.state.fave_game, 'required|alpha_space')}
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientEditProfile);