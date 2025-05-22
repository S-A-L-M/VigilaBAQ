import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, notificationsOutline, settingsOutline, searchOutline, heartOutline, personOutline, shieldOutline } from 'ionicons/icons';
import { IonHeader, IonIcon, IonButton, IonToolbar, IonTabBar, IonTabButton, IonLabel, IonContent, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet,  IonContent, IonLabel, IonTabButton, IonTabBar, IonToolbar, IonButton, IonIcon, IonHeader, ]
})
export class MainPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  constructor() {
    addIcons({homeOutline,notificationsOutline,settingsOutline,shieldOutline,searchOutline,heartOutline,personOutline,logoIonic});
  }

  @HostListener('ionScroll', ['$event'])
  scrolling($event: any) {
    console.log("-----scrolling detected--------");
    const getScrollVal = $event;
    let scrollElement = getScrollVal.detail;
 }

  ngOnInit() {
  }





}

  

