import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { FootballRestProvider } from '../../providers/football-rest/football-rest';
import { Player } from '../../app/models/player.model';
import { Team } from '../../app/models/team.model';


@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  loading: Loading;
  private players: Player[] = [];
  private team: Team;
  private teamId: number;

  constructor(public navCtrl: NavController, 
              public restProvider: FootballRestProvider, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController) {
    this.team   = navParams.get('team');
    this.teamId = navParams.get('teamId');
  }

  ionViewDidLoad() {
    this.getPlayers();
  }

  getPlayers() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Jogadores...'
    });

    this.loading.present().then(() => {
      this.restProvider
        .getPlayers(this.teamId)
        
        .subscribe(
          response => {
            this.loading.dismiss();
            if (response.players.length > 0) {
              this.players = response.players;
            }
        });
    });
  }
}
