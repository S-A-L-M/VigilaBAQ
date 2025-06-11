import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonModal, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { logoIonic, homeOutline, notificationsOutline,time,checkmark, people,settingsOutline, searchOutline, heartOutline, personOutline, shieldOutline, arrowForwardOutline, trophyOutline, peopleOutline, documentTextOutline, chevronForwardOutline, cameraOutline, shareOutline, checkmarkOutline, addOutline, mailOutline, analyticsOutline, starOutline, businessOutline, shieldCheckmark, rocketOutline, flash, trendingUp, logInOutline, personAddOutline } from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon ,IonContent, CommonModule, FormsModule, IonModal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePagePage implements OnInit {
  @ViewChild('modal', { static: false }) modal!: IonModal;
  
  isModalOpen = false;
  
  
  constructor(private router: Router) { 
    // this.lockOrientation();
    addIcons({peopleOutline,checkmark,analyticsOutline,businessOutline,shieldCheckmark,time,people,rocketOutline,flash,trendingUp,logInOutline,personAddOutline,trophyOutline,documentTextOutline,chevronForwardOutline,cameraOutline,shareOutline,checkmarkOutline,addOutline,mailOutline,settingsOutline,starOutline,arrowForwardOutline,homeOutline,notificationsOutline,shieldOutline,searchOutline,heartOutline,personOutline,logoIonic}); 
  }

  onLogin(){
  this.router.navigate(['/signin']); 
  }

  onRegister(){
    this.router.navigate(['/signup'])

  }

  openModal() {
    this.isModalOpen = true;
  }

  onModalDismiss() {
    this.isModalOpen = false;
  }

  async openModalWithViewChild() {
    await this.modal.present();
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
