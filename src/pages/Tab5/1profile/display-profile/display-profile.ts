import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { ChangePasswordPage } from '../change-password/change-password';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-display-profile',
  templateUrl: 'display-profile.html'
})
export class DisplayProfilePage {
profile;username;mobile;email;gender;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ionViewWillEnter() {
    //console.log('ionViewDidLoad DisplayProfilePage');
      this.profile = JSON.parse(localStorage.getItem('user'));
      this.username = this.profile.name;
      this.mobile = this.profile.phone;
      this.gender = this.profile.gender;
      this.email = this.profile.email;
  }
  goToChangePassword(){
        this.navCtrl.push(ChangePasswordPage);
  }
  goToEditProfile(){
    this.navCtrl.push(EditProfilePage,{
      user :this.profile
    });
  }

}
