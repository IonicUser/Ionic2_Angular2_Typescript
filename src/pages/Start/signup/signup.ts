import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

//pages
import { TabsPage } from '../../tabs/tabs.page'

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  registerCredentials1 = {name:'',email: '', pass: '',pass1: '',num:''};
     em:string;
     pass:string;
     nam:string;
     num:string;
     pass1:string;
     data;
     token;
    signupp(){
     
     this.em = this.registerCredentials1.email;
     this.pass = this.registerCredentials1.pass;
     this.pass1 = this.registerCredentials1.pass1;
     this.nam = this.registerCredentials1.name;
     this.num = this.registerCredentials1.num;
        
           let headers = new Headers({ 'Content-Type': 'application/json' });
        //let body = new FormData();
        /*this.resp =this.http.post('http://staging.feturtles.com:3002/user/authenticate',body,headers)
            .map(res => res.json());*/
        if(this.pass==this.pass1){
        this.http
        .post('http://staging.feturtles.com:3002/user/authenticate/register',
              {
                "email":this.em,
                "password":this.pass,
                "name":this.nam,
                "phone":this.num
        }, {
            headers: headers
          })
          .subscribe(data => {
                  let alert3 = this.alertCtrl.create({
                  title: 'Signup successful',
                  subTitle: '',
                  buttons: ['OK']
                });
          this.data=data;    
          alert3.present();
          this.loginHere();
          }, error => {
                let alert4 = this.alertCtrl.create({
                  title: 'Signup Failed',
                  subTitle: 'Please Check Details!',
                  buttons: ['OK']
                });
            alert4.present();
              console.log(JSON.stringify(error.json()));
          });
        }
        else{
            let alert5 = this.alertCtrl.create({
                  title: 'Signup Failed',
                  subTitle: 'Passwords do not match',
                  buttons: ['OK']
                });
                alert5.present();
        }
        
        //console.log(this.resp.token);
        
     }
     loginHere(){
         
         let headers = new Headers({ 'Content-Type': 'application/json' });
          this.http
        .post('http://staging.feturtles.com:3002/user/authenticate',
              {
                "email":this.registerCredentials1.email,
                "password":this.registerCredentials1.pass
        }, {
            headers: headers
          })
          .subscribe(data => {
                  
            this.data = data;
             this.token=JSON.parse(this.data._body).token;
            localStorage.setItem("token", this.token);
            this.navCtrl.push(TabsPage); 
          }, error => {
                let alert4 = this.alertCtrl.create({
                  title: 'Signup Failed',
                  subTitle: 'Please Check Details!',
                  buttons: ['OK']
                });
            alert4.present();
              console.log(JSON.stringify(error.json()));
          });
         
     }
     goBack(){
         this.navCtrl.pop();
     }
}
