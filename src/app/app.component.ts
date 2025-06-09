import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {


  constructor() {}

   async ngOnInit() {
    if (Capacitor.isNativePlatform()) {
      await this.configureStatusBar();
    }
  }

  private async configureStatusBar() {
  StatusBar.setOverlaysWebView({overlay: false})
  StatusBar.setBackgroundColor({ color: '#3880ff' });
  StatusBar.setStyle({ style: Style.Light });
}
  
}
