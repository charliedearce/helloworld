import React, {Component} from 'react';
import {Profile} from "../../components/profile";
import {IonButton, IonCol, IonRow} from "@ionic/react";
import {connect} from 'react-redux';
import * as actions from "../../services/store/profile/actions";
import Swal from "sweetalert2";
import firebase from "firebase";

class ClientProfile extends Component<any> {
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
                        <b>Favorite Casino:</b> {this.props.profileData.fave_casino ? this.props.profileData.fave_casino : 'N/A'}
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <b>Favorite Game:</b> {this.props.profileData.fave_game ? this.props.profileData.fave_game : 'N/A'}
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark"
                                   shape="round" fill="outline"
                                   routerLink={'/client/profile/edit?data='+JSON.stringify(this.props.profileData)}
                        >
                            Edit Profile
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/client/changepassword"
                        >
                            Change Password
                        </IonButton>
                        <IonButton className="ion-margin-vertical"
                                   expand="full" color="dark" shape="round"
                                   fill="outline"
                                   routerLink="/client/settings"
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);