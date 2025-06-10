import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, notificationsOutline, settingsOutline, searchOutline, heartOutline, personOutline, shieldOutline, arrowForwardOutline, trophyOutline, peopleOutline, documentTextOutline, chevronForwardOutline, cameraOutline, shareOutline, checkmarkOutline, addOutline, mailOutline, analyticsOutline, starOutline } from 'ionicons/icons';
import { IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  constructor() { 
    addIcons({trophyOutline,peopleOutline,documentTextOutline,chevronForwardOutline,cameraOutline,shareOutline,checkmarkOutline,addOutline,mailOutline,analyticsOutline,settingsOutline,starOutline,arrowForwardOutline,homeOutline,notificationsOutline,shieldOutline,searchOutline,heartOutline,personOutline,logoIonic});  
  }

  ngOnInit() {
  }

}
