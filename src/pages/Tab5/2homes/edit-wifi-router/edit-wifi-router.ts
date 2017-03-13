import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';


@Component({
  selector: 'page-edit-wifi-router',
  templateUrl: 'edit-wifi-router.html'
})
export class EditWifiRouterPage {
ssid;pass;wifi;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
    this.wifi= this.navParams.get('wifi');
   // console.log(this.wifi);

  }

  ionViewWillEnter() {
        this.ssid=this.wifi.name;
    this.pass =  this.wifi.password;
    console.log('ionViewDidLoad EditWifiRouterPage');
  }
 editWifiRouter(){
        let obj={
          "action":"update",
          "ssid": this.ssid,
          "password": this.pass,
          "home": this.navParams.get('home')
        }
        this.ds.postEditWifiRouter(obj,
        data => {
                console.log(data);
                this.wifi.password = this.pass;
                 // this.toaster("home added successfully!");
                  this.navCtrl.pop();
        },error=>{

        });
  }
}
