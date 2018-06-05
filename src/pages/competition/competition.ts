import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Competitions } from '../../app/models/competitions.model';
import { FootballRestProvider } from '../../providers/football-rest/football-rest';
import { Team } from '../../app/models/team.model';
import { PlayerPage } from '../player/player';


@IonicPage()
@Component({
  selector: 'page-competition',
  templateUrl: 'competition.html',
})
export class CompetitionPage {
  private competition: Competitions;
  private teams: Team[] = [];
  loading: Loading;
  
  constructor(public navCtrl: NavController,
              public  restProvider: FootballRestProvider, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController) {
    this.competition = navParams.get('competition')
  }

  ionViewDidLoad() {
    this.getTeams();
  }

  getTeams() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Times...'
    });

    this.loading.present().then(() => {
      this.restProvider
        .getTeams(this.competition.id)
        
        .subscribe(
          response => {
            this.loading.dismiss();
            if (response.teams.length > 0) {
              this.teams = response.teams;
            }
        });
    });
  }

  openPlayers(team, teamId) {
    this.navCtrl.push(PlayerPage, {
      team: team,
      teamId: teamId
    });
  }

}
