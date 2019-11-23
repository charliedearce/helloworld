import React, {Component} from 'react';
import {
    IonRow,
    IonCol,
    IonToggle,
    IonTextarea,
    IonList,
    IonSelect,
    IonItem,
    IonLabel,
    IonText,
    IonAvatar,
    IonButton,
    IonSearchbar,
    IonRefresherContent,
    IonRefresher
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import {RefresherEventDetail} from '@ionic/core';
import * as actions from "../../services/store/client/actions";
import {connect} from "react-redux";



interface myState {
    therapistList: any
}

class ClientBooking extends Component<any, myState> {

    constructor(props: any){
        super(props);
        this.state = {
            therapistList: []
        }

    }

    refreshTherapistList = (event: CustomEvent<RefresherEventDetail>) => {
        this.props.getTherapistList()
        event.detail.complete()
    }

    componentDidMount(): void {
        this.props.getTherapistList();
    }

    searchTherapist = (event: any) => {
        if(event.detail.value === ''){
            this.props.getTherapistList(event.detail.value);
        } else {
            setTimeout(()=>{
                this.props.getTherapistList(event.detail.value);
            }, 2000)
        }
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        if(prevProps.therapistList !== this.props.therapistList){
            this.setState({
                therapistList: this.props.therapistList
            })
        }
    }

    render() {

        const therapist = this.state.therapistList.map((item: any, key: any) => {
                return (
                    <IonList key={key}>
                        <IonItem lines="none"
                                 onClick={() => alert('test')}>
                            <div className="queue-bubble" style={{padding: "5px"}}>
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td className="ion-text-center">
                                            <IonAvatar slot="start" style={{display: "inline-block"}}>
                                                <img
                                                    src={this.state.therapistList[key].image ? this.state.therapistList[key].image : '/assets/blank.png'}/>
                                            </IonAvatar><br/>
                                            {
                                                this.state.therapistList[key].busy === false ?
                                                    <IonText color="success">Available</IonText>
                                                    :
                                                    <IonText color="danger">Busy</IonText>
                                            }
                                        </td>
                                        <td className="ion-padding-start" valign="top" style={{paddingTop: "10px"}}>
                                            <IonText style={{fontSize: "20px"}}>{this.state.therapistList[key].name}</IonText>
                                            <br/>
                                            <IonText color="medium" style={{fontSize: "15px"}}>Rate: {this.state.therapistList[key].currency} {this.state.therapistList[key].rate}
                                                / Min. </IonText>
                                        </td>
                                        <td>
                                            <IonButton style={{float: "right"}}>{this.state.therapistList[key].busy === false ? 'Book' : 'Queue'}</IonButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ion-text-center" colSpan={3}>
                                            <IonText color="danger">
                                                {this.state.therapistList[key].specials ? 'Special Offer' : ''}
                                            </IonText>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ion-text-center" colSpan={3}>
                                            <IonText color="medium" style={{fontSize: "12px"}}>{this.state.therapistList[key].specials}</IonText>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </IonItem>
                    </IonList>

                );
            }
        );

        return (
            <LoginWrapper title="Therapist List">
                <IonRefresher slot="fixed" onIonRefresh={this.refreshTherapistList}>
                    <IonRefresherContent>
                    </IonRefresherContent>
                </IonRefresher>
                <IonRow>
                    <IonCol>
                        <IonSearchbar showCancelButton="focus"
                                      animated={true}
                                      placeholder="Search Therapist name"
                                      onIonChange={this.searchTherapist}
                        >
                        </IonSearchbar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        {therapist}
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        therapistList: state.client.therapistList,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getTherapistList: (data: any) => dispatch(actions.getTherapistList(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientBooking);