import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

import { SwitchBoardDisplayPage } from '../../4sboards/switch-board-display/switch-board-display';
import { CreatesboardPage } from '../../4sboards/createsboard/createsboard';

@Component({
  selector: 'page-sboard-list',
  templateUrl: 'sboard-list.html'
})
export class SboardListPage {
  home; data; items = [];
  public homeName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ) {

  }

  ionViewWillEnter() {
    this.home = this.navParams.get('home');
    this.homeName = this.navParams.get('homeName');
    console.log(this.home);
    this.ht.getMe('sboards/mysboards?home=' + this.home._id)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      }, error => {
        console.log(error);
        console.log(JSON.stringify(error.json()));
      });
  }


  // goto switch board details page
  public goToSwitchBoardDetails(value, roomName) {
    this.navCtrl.push(SwitchBoardDisplayPage, {
      switchboard: value,
      homeName: this.homeName,
      homeId: this.home._id,
      roomName: roomName,
      for: this.navParams.get('for')

    });
  }
  //Adding switch board based on home and room Id
  public addSwitchBoard() {
    this.navCtrl.push(CreatesboardPage, {
      homeId: this.home._id,
      roomData: this.data
    });
  }


}
