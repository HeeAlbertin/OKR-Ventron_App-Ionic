import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestProvider } from  './../../providers/rest/rest';
import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  loginForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public  restProvider: RestProvider,
              private formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Inválido!',
      subTitle: 'Usuário ou Senha Inválidos!',
      buttons : [
                  {
                    text : 'Ok',
                    handler : () => {
                        alert.dismiss();
                        return false;
                    }
                  }
                ]
    });
    alert.present();
  }

  login() {
    this.loading = this.loadingCtrl.create({
      content: 'Logando...'
    });

    this.loading.present().then(() => {
      this.restProvider
        .loginUser(this.loginForm.value)
        
        .subscribe(    
          response => {
            this.loading.dismiss();
            if (response.email) {
              this.navCtrl.push(HomePage);
            } else {
              this.presentAlert();
            }
          }, 
          error => {
            this.loading.dismiss();
            this.presentAlert();
          }
        );
        
    });
  }

  signIn() {
    this.navCtrl.push(SignInPage);
  }

}
