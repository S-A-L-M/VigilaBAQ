import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonButton, IonItem, IonLabel, IonList, IonInputPasswordToggle  } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonInput, IonContent, CommonModule, FormsModule, IonIcon, IonItem, IonInputPasswordToggle]
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  redirectToHome() {
  this.route.navigate(['/main']); 
}

}
