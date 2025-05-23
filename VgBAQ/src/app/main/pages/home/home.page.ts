import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonButton, IonCardHeader, IonItem, IonProgressBar, IonLabel, IonRow, IonCol, IonList, IonAvatar, IonGrid, IonNote, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonText,IonCardSubtitle ,IonNote, IonGrid, IonAvatar, IonList, IonCol, IonRow, IonLabel, IonProgressBar, IonItem, IonCardHeader, IonButton, IonIcon, IonCardTitle, IonCardContent, IonCard, CommonModule, FormsModule, IonContent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
