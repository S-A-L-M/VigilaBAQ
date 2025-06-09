import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, notificationsOutline, settingsOutline, searchOutline, heartOutline, personOutline, shieldOutline, arrowForwardOutline, trophyOutline, peopleOutline, documentTextOutline, chevronForwardOutline, cameraOutline, shareOutline, checkmarkOutline, addOutline, mailOutline, analyticsOutline, starOutline } from 'ionicons/icons';
import { IonContent, IonCardContent, IonButton, IonCard, IonIcon, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonAvatar, IonProgressBar, IonGrid, IonNote, IonCardSubtitle, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonText, IonCardSubtitle, IonNote, IonProgressBar, IonAvatar, IonList, IonLabel, IonItem, IonCardTitle, IonCardHeader, IonIcon, IonCard, IonButton, IonCardContent, IonContent, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { 
    addIcons({trophyOutline,peopleOutline,documentTextOutline,chevronForwardOutline,cameraOutline,shareOutline,checkmarkOutline,addOutline,mailOutline,analyticsOutline,settingsOutline,starOutline,arrowForwardOutline,homeOutline,notificationsOutline,shieldOutline,searchOutline,heartOutline,personOutline,logoIonic});  
  }

  ngOnInit() {
  }

}
