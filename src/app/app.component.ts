import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      this.checkPreviousAuthorization();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  checkPreviousAuthorization(): void { 
    this.storage.get('email').then((val) => {
      if (val) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}

