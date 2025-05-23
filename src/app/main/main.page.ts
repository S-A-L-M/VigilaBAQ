import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular/standalone';import { addIcons } from 'ionicons';
;

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonLabel, IonTabButton, IonTabBar, IonRouterOutlet, IonIcon, IonButton, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class MainPage implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
