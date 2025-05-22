import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonButton, IonCardHeader, IonItem, IonProgressBar, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonProgressBar, IonItem, IonCardHeader, IonButton, IonIcon, IonCardTitle, IonCardContent, IonCard, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
