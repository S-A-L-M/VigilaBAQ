import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';


register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor() { 
  }
  
  private async configureStatusBar() {
    await StatusBar.setOverlaysWebView({ overlay: false })
    await StatusBar.setBackgroundColor({ color: '#3880ff' });
    await StatusBar.setStyle({ style: Style.Light });
  }
  

  async ngOnInit() {
    if (Capacitor.isNativePlatform()) {
      await this.configureStatusBar();
    }
  }

}
