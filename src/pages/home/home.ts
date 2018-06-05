import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, Loading } from 'ionic-angular';
import { FootballRestProvider } from  './../../providers/football-rest/football-rest';
import { Competitions } from '../../app/models/competitions.model';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { CompetitionPage } from '../competition/competition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private competitions: Competitions[] = [];
  private year: number;
  loading: Loading;

  constructor(public navCtrl: NavController,
    public  restProvider: FootballRestProvider,
    private viewCtrl: ViewController,
    private storage: Storage,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);
    this.getCompetitions();

    const currentTime = new Date();
    this.year = currentTime.getFullYear();
  }

  getCompetitions() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Torneios...'
    });
    this.loading.present().then(() => {
      this.restProvider
        .getCompetitions()
        
        .subscribe(
          response => {
            this.loading.dismiss();
            if (response.length > 0) {
              this.competitions = response;
            }
        });
    });
  }

  openCompetition(comp) {
    this.navCtrl.push(CompetitionPage, {
      competition: comp
    });
  }

  logout() {
    this.storage.remove('email');
    this.navCtrl.push(LoginPage);
  }
}
