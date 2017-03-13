import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from 'ionic-native';

//pages
import { IrListPage } from '../ir-list/ir-list'


@Component({
  selector: 'page-remote',
  templateUrl: 'remote.page.html'
})
export class RemotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemotePage');
  }
  gotoIR(){
      Vibration.vibrate(20);
      this.navCtrl.push(IrListPage);
  }
}
