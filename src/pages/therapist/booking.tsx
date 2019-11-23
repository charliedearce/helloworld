import React, {Component} from 'react';
import {
    IonRow, IonCol, IonToggle, IonTextarea,
    IonList, IonSelect, IonItem, IonSelectOption, IonLabel, IonInput, IonText, IonButton
} from '@ionic/react';
import {LoginWrapper} from '../../components/container/login-wrapper';
import * as actions from "../../services/store/therapist/actions";
import {connect} from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";

interface myState {
    casino: string,
    currency: string,
    rate: string,
    specials: string,
    toggle: boolean
}

class TherapistBooking extends Component<any, myState> {
    private validator: SimpleReactValidator;
    private baseState: any;
    constructor(props: any){
        super(props);
        this.state = {
            casino: '',
            currency: '',
            rate: '',
            specials: '',
            toggle: false
        }
        this.baseState = this.state;
        this.validator = new SimpleReactValidator({
            element: (message: any) => <IonText color="danger">{message}</IonText>
        })
    }

    componentDidMount(): void {
        this.props.therapistStatusInfo();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<myState>, snapshot?: any): void {
        if(prevProps.therapistStatInfo !== this.props.therapistStatInfo){
            this.setState({
                casino: this.props.therapistStatInfo.casino,
                currency: this.props.therapistStatInfo.currency,
                rate: this.props.therapistStatInfo.rate,
                specials: this.props.therapistStatInfo.specials,
                toggle: this.props.therapistStatInfo.casino ? true : false,
            })
        }

        if(prevProps.errMessage !== this.props.errMessage){
            if(this.props.errMessage.message === 'status active'){
                Swal.fire(
                    'Your Status is Active',
                    'Clients can book you now.',
                    'success'
                )
            }else if(this.props.errMessage.message === 'status not active'){
                Swal.fire(
                    'Your Status now is In Active',
                    'Client wont be able to book you.',
                    'warning'
                )
                this.setState(this.baseState)
            }
        }
    }

    submitHandler = () => {
        if (this.validator.allValid()) {
            this.setState({
                toggle: !this.state.toggle
            })
            this.props.therapistStatus(this.state)
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    casinoChange = (event: any) => {
        this.setState({casino: event.detail.value});
    };

    rateChange = (event: any) => {
        this.setState({rate: event.detail.value});
    };

    specialsChange = (event: any) => {
        this.setState({specials: event.detail.value});
    };

    currencyChange = (event: any) => {
        this.setState({currency: event.detail.value});
    };

    render() {

        return (
            <LoginWrapper title="Booking">
                <IonRow>
                    <IonCol className="ion-margin-top">
                        <div className="queue-bubble ion-padding">
                            1. Enter your information <br/>
                            2. Turn ON-SITE button to ON <br/>
                            3. Client Request You! <br/>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Your Current Casino</IonLabel>
                            <IonInput type="text" onIonChange={this.casinoChange} value={this.state.casino} disabled={this.state.toggle ? true : false}></IonInput>
                        </IonItem>
                        {this.validator.message('Current Casino', this.state.casino, 'required')}
                        <IonItem>
                            <IonLabel>Currency</IonLabel>
                            <IonSelect placeholder="Select Currency" onIonChange={this.currencyChange} selectedText={this.state.currency} disabled={this.state.toggle ? true : false}>
                                <IonSelectOption value="USD">USD</IonSelectOption>
                                <IonSelectOption value="EUR">EUR</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        {this.validator.message('Currency', this.state.currency, 'required')}
                        <IonItem>
                            <IonLabel position="floating">Your Rate per Minute</IonLabel>
                            <IonInput type="text" onIonChange={this.rateChange} value={this.state.rate} disabled={this.state.toggle ? true : false}></IonInput>
                        </IonItem>
                        {this.validator.message('Rate per Minute', this.state.rate, 'required|integer')}
                        <IonItem>
                            <IonTextarea onIonChange={this.specialsChange} placeholder="Notify Clients of any Specials!" rows={4} value={this.state.specials} disabled={this.state.toggle ? true : false}></IonTextarea>
                        </IonItem>
                        {this.validator.message('Specials', this.state.specials, 'required')}
                        <IonItem className="ion-margin-vertical">
                            <IonLabel>ON SITE</IonLabel>
                            <IonToggle onClick={()=>this.submitHandler()} checked={this.state.toggle ? true : false}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        therapistStatInfo: state.therapist.therapistStatInfo,
        errMessage: state.therapist.errMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        therapistStatus: (data: any) => dispatch(actions.therapistStatus(data)),
        therapistStatusInfo: () => dispatch(actions.therapistStatusInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TherapistBooking);