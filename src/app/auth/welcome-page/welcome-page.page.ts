import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton, IonLabel } from '@ionic/angular/standalone';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Capacitor } from '@capacitor/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonIcon, IonContent, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePagePage implements OnInit {
  
  constructor(private router: Router) { 
    // this.lockOrientation();
  }

  onLogin(){
  this.router.navigate(['/signin']); 
  }

  onRegister(){

  }

  // async lockOrientation(orientationType?: OrientationType) {

  //   if (Capacitor.isNativePlatform()) {
  //     await ScreenOrientation.lock({
  //       orientation: orientationType || 'portrait'
  //     });
  //     return
  //   }
  // }

  ngOnInit() {
  }

}
