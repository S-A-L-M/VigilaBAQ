import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonButton, IonCol, IonCard, IonIcon, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonRow, IonAvatar, IonProgressBar, IonGrid, IonNote, IonCardSubtitle, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonText, IonCardSubtitle, IonNote, IonGrid, IonProgressBar, IonAvatar, IonRow, IonList, IonLabel, IonItem, IonCardTitle, IonCardHeader, IonIcon, IonCard, IonCol, IonButton, IonCardContent, IonContent, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
