import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem, IonLabel, IonAvatar, IonList, IonListHeader, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
