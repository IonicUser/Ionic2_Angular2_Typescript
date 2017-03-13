import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,Platform } from 'ionic-angular';
import {Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import { authToken } from '../../../providers/app/authToken/authToken';
import { Facebook,NativeStorage } from 'ionic-native';

//providers
import { LocalStorageService } from '../../../providers/LocalStorageService';

//pages
import { ForgotPasswordDetailsPage } from '../forgot-password-details/forgot-password-details';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../../Tab1/home/home.page';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[authToken,Facebook]
})
export class LoginPage {
FB_APP_ID: number = 361624727529364;
registerCredentials = {email: '', password: ''};
     em:string;
     pass:string;
     data;
     token;
     icon1;
     platform;fb;email;name;id;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private http:Http,private a:authToken,private local:LocalStorageService) {
        // Facebook.browserInit(this.FB_APP_ID, "v2.8");
            
  }
      
      
  resp;
  uid;
fbLogin(): void {
   let permissions = new Array();
    let nav = this.navCtrl;
    let al = this.alertCtrl;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];
    
   
    Facebook.login(['email'])
    .then(function(response){
      this.resp = response;
      let userId = response.authResponse.userID;
      let params = new Array();
      this.uid = userId;   
      localStorage.setItem("token",JSON.stringify(this.resp));
      nav.push(TabsPage); 
      //Getting name and gender properties
    /*  Facebook.api("/me?fields=name,gender", params)
      .then(function(user) {
          
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
          
          console.log(user.name);
        }, function (error) {
          console.log(error);
         
        })
      })*/
    }, function(error){ 
      console.log(error);
    });
    
      
   // this.navCtrl.push(TabsPage);
  }
  
    login(){
     this.em = this.registerCredentials.email;
     this.pass = this.registerCredentials.password;
           let headers = new Headers({ 'Content-Type': 'application/json' });
        this.http
        .post('http://staging.feturtles.com:3002/user/authenticate',
              {
                "email":this.em,
                "password":this.pass
        }, {
            headers: headers
          }).map((res:Response)=>res.json())
          .subscribe(data => {
                 /* let alert = this.alertCtrl.create({
                  title: 'Login successful',
                  subTitle: 'the username and password are authenticated on REST API!',
                  buttons: ['OK']
                });*/
          //alert.present();
          this.data = data;
          this.token= this.data.token;
          this.local.setToken(this.token);
          this.local.setUser(JSON.stringify(this.data.user));
          console.log(JSON.parse(this.local.getUser()));
          this.local.setDefaultHome(this.data.user.default_home);
          this.navCtrl.pop();
          this.navCtrl.push(TabsPage); 
          }, error => {
                let alert1 = this.alertCtrl.create({
                  title: 'Login Failed',
                  subTitle: 'Please Check Username and Password!',
                  buttons: ['OK']
                });
            alert1.present();
              console.log(JSON.stringify(error.json()));
          });
        
        
        //console.log(this.resp.token);
        
     }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //loconsole.log(this.a.checker());
  }
  goToSignUp(){
      this.navCtrl.push(SignupPage);
  }
  goToForgotPassword(){
    this.navCtrl.push(ForgotPasswordDetailsPage);
  }
}
