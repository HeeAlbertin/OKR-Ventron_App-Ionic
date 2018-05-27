import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestProvider } from  './../../providers/rest/rest';
import { User } from  '../../app/models/user.model';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  userForm: FormGroup;
  private users: User[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public  restProvider: RestProvider) {

    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  onCreateUser() {
    this.restProvider
    .createUser(this.userForm.value)
    
    .subscribe(    
      (newUser) => {
        this.users = this.users.concat(newUser);
        console.log(this.users);
      }
    );
  }

}
