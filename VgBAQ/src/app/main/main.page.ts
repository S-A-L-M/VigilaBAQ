import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, notificationsOutline, settingsOutline, searchOutline, heartOutline, personOutline, shieldOutline } from 'ionicons/icons';
import { IonHeader, IonIcon, IonButton, IonToolbar, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonLabel, IonTabButton, IonTabBar, IonRouterOutlet, IonToolbar, IonButton, IonIcon, IonHeader, ]
})
export class MainPage implements OnInit {

  constructor() {
    addIcons({homeOutline,notificationsOutline,settingsOutline,shieldOutline,searchOutline,heartOutline,personOutline,logoIonic});
  }

  ngOnInit() {
  }





}

  

