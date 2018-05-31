import { Component, OnInit } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { RestProvider } from  './../../providers/rest/rest';
import { User } from '../../app/models/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private users: User[] = [];

  constructor(public navCtrl: NavController,
    public  restProvider: RestProvider,
    private viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);
    this.getUsers();
  }

  getUsers() {
    this.restProvider
    .getUsers()
    
    .subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

}
