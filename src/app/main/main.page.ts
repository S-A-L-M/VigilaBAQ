import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";
import { TabBarComponent } from "../shared/tab-bar/tab-bar.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonContent, CommonModule, FormsModule, HeaderComponent, TabBarComponent]
})
export class MainPage implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
