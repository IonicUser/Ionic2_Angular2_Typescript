import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PrimeUserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prime-user-details',
  templateUrl: 'prime-user-details.html'
})
export class PrimeUserDetailsPage {
home;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.home = this.navParams.get('home');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimeUserDetailsPage');
  }

}
