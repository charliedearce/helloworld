import React, {Component} from 'react';
import {Profile} from "../../components/profile";
import {
    IonRow,
    IonCol,
    IonButton
} from '@ionic/react';
import {connect} from 'react-redux';
import * as actions from "../../services/store/profile/actions";
import Swal from "sweetalert2";
import firebase from "firebase";

class TherapistProfile extends Component<any> {
    componentDidMount(): void {
        this.props.getProfile();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        if(prevProps.errMessage !== this.props.errMessage){
            if(this.props.errMessage.message === 'successfully logged out'){
                localStorage.clear();
                window.location.replace("/");
            }
        }
    }

    signOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be sign out.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign me out!'
        }).then((result) => {
            if (result.value) {
                firebase.auth().signOut()
                this.props.Logout();
            }
        })
    }

    render() {
        return (
            <Profile
                name={this.props.profileData.first_name ? this.props.profileData.first_name + " " + this.props.profileData.last_name : this.props.profileData.display_name}
                image={this.props.profileData.image ? this.props.profileData.image : '/assets/blank.png'}
            >
                <IonRow>
                    <IonCol>
                        <b>Company:</b> {this.props.profileData.company}
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <b>Bio:</b> {this.props.profileData.bio}
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark"
                                   shape="round" fill="outline"
                                   routerLink={'/therapist/profile/edit?data='+JSON.stringify(this.props.profileData)}
                        >
                            Edit Profile
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/therapist/changepassword"
                        >
                            Change Password
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/therapist/settings"
                        >
                            Settings
                        </IonButton>
                        <IonButton expand="full" color="dark" shape="round" fill="outline" onClick={()=>this.signOut()}>Sign Out</IonButton>
                    </IonCol>
                </IonRow>
            </Profile>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        profileData: state.profile.profileData,
        errMessage: state.profile.errMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: () => dispatch(actions.getProfile()),
        Logout: () => dispatch(actions.Logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TherapistProfile);