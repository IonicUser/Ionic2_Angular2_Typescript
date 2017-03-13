import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http,Headers,RequestOptions} from '@angular/http';


//providers
import { DataService } from '../../../providers/DataService';
import { ToastService } from '../../../providers/ToastService';

//pages
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-forgot-password-details',
  templateUrl: 'forgot-password-details.html'
})
export class ForgotPasswordDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService,private ts:ToastService,private ht :Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordDetailsPage');
  }
  email;
  goToOTP(){
    let obj={
        "email" : this.email
    };
    /*  this.ds.postEmailForgotPassword(obj,(data)=>{
          this.navCtrl.push(ForgotPasswordPage);
      },(error)=>{
          console.log(error);
      });*/
       let headers = new Headers({ 'Content-Type': 'application/json' });
        this.ht
        .post('http://staging.feturtles.com:3002/user/authenticate',obj, {
            headers: headers
          })
          .subscribe(data => {
              console.log(data);
              this.navCtrl.push(ForgotPasswordPage);

          });
          }

}
