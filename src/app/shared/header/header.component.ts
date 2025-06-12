import { Component, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonIcon, IonButton, IonToggle } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToggle, IonButton, IonIcon, IonToolbar, IonHeader, FormsModule]
})
export class HeaderComponent implements OnInit {

  paletteToggle = signal(false);

  constructor() {

  }

  async checkAppMode() {
    const saved = await Preferences.get({ key: 'darkModeActivated' });

    if (saved.value) {
      this.initializeDarkPalette(saved.value === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.initializeDarkPalette(prefersDark.matches);
      prefersDark.addEventListener('change', (mediaQuery) =>
        this.initializeDarkPalette(mediaQuery.matches)
      );
    }
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle.set(isDark);
    this.toggleDarkPalette(isDark);
  }

  toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    this.paletteToggle.set(shouldAdd);
    Preferences.set({key: 'darkModeActivated',value: shouldAdd ? 'true' : 'false'});
  }

  ngOnInit() {
    this.checkAppMode();
  }


}
