import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { FootballRestProvider } from '../providers/football-rest/football-rest';
import { RestProvider } from '../providers/rest/rest';

import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/sign-in/sign-in';
import { HomePage } from '../pages/home/home';
import { CompetitionPage } from '../pages/competition/competition';
import { PlayerPage } from '../pages/player/player';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    CompetitionPage,
    PlayerPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      backButtonText: 'Voltar'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignInPage,
    CompetitionPage,
    PlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    FootballRestProvider
  ]
})
export class AppModule {}

