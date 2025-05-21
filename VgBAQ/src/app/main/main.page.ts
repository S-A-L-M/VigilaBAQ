import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRouterOutlet, IonButton, IonIcon, ActionSheetController, MenuController, IonTabs, IonTabBar, IonTabButton, IonLabel, IonBadge, IonAvatar, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonItem, IonNote, IonList } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [ IonAvatar, IonBadge, IonLabel, IonTabButton, IonTabBar, IonTabs, IonIcon, IonButton, IonRouterOutlet, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class MainPage implements OnInit {

  constructor(
    private router: Router,
    private menuController: MenuController,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }





}

  

