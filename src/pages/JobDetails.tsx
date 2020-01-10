import React from 'react';
import {db} from './Firebase'
import {IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonButton} from '@ionic/react'


const Details = ()  => {

const addDetails = () => {
    db.collection("").doc().set({
        Status: "",
        Notes: ""
    })


    .then(function(){
        console.log("Successful update");
    })


    .catch (function(error){
        console.error("Something went wrong")
    })
};



return(
    <IonContent>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    Job Details
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    Job Type:  <br/>
                    Location:  <br/>
                    h<br/>
                    h <br/>
                    n <br/>
                    n <br/>
                </IonItem>
                <IonList>
                    <IonItem>
                        <IonLabel> Update Job Status </IonLabel>
                            <IonSelect value = "Job" interface = "action-sheet">
                                <IonSelectOption value = "complete">Complete</IonSelectOption>
                                <IonSelectOption value = "pending"> Pending</IonSelectOption>
                            </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Notes</IonLabel>
                        <IonTextarea  autoGrow = {true}></IonTextarea>
                    </IonItem>
                        <IonButton expand = "block" onClick = {addDetails}> Update </IonButton>
                </IonList>
            </IonCardContent>
        </IonCard>
    </IonContent>
)

}

export default Details;