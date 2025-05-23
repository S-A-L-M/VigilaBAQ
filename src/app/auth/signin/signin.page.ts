import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonInput, IonLabel, IonItem, IonContent,CommonModule, FormsModule, IonInputPasswordToggle]
})
export class SigninPage implements OnInit {

  constructor(private route: Router) { }

  redirectToHome() {
  this.route.navigate(['/main']); 
}

  ngOnInit() {
  }


}
