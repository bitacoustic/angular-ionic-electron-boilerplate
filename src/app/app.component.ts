import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

// pages
import { TitlePage } from '../pages/title/title';
import { MenuPage } from '../pages/menu/menu';
import { SlidesPage } from '../pages/slides/slides';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'TitlePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private screenOrientation: ScreenOrientation) {
    platform.ready().then(() => {
      // The platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      // lock orientation to landscape on mobile devices
      if (platform.is('ios') || platform.is('android')) {
        screenOrientation.lock(screenOrientation.ORIENTATIONS.LANDSCAPE);
      }
    });
  }
}

