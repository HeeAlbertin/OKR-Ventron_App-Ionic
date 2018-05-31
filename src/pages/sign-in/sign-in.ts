import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestProvider } from  './../../providers/rest/rest';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  userForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public  restProvider: RestProvider) {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }  

  ionViewDidLoad() {
  }

  onCreateUser() {
    this.submitAttempt = true;
    if (this.userForm.valid) {
      this.restProvider
      .createUser(this.userForm.value)
      
      .subscribe(    
        (newUser) => {
          this.navCtrl.push(HomePage);
        }
      );
    }
  }

}
