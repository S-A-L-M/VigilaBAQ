import { Component, OnInit } from '@angular/core';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  imports: [IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
