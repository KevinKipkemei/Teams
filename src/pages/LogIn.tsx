import React from 'react';
import { IonContent, IonButton, IonCard, IonCardContent, IonItem, IonImg } from '@ionic/react';
import {IonInput} from '@ionic/react'



const Log = () => {

    return (
           <IonContent class="content_area">
             <IonCard class = "card">
               <IonItem>
                 <IonImg src = "./pubic/assets/icon/Login.png">>
                 </IonImg>
               </IonItem>
               <IonCardContent>
                  <IonInput placeholder = "Enter Email" inputmode = "email" required = {true} type = "email" ></IonInput>
                  <IonInput placeholder = "Enter Password" required = {true} type = "password"></IonInput>
                  <IonButton expand="block" >Log In</IonButton>
               </IonCardContent>
            </IonCard>
           </IonContent>
    )
}


export default Log;


