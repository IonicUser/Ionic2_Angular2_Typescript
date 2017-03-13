import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';


@Component({
  selector: 'page-create-wifi-router',
  templateUrl: 'create-wifi-router.html'
})
export class CreateWifiRouterPage {
ssid;pass;routers;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
        this.routers = this.navParams.get('routers');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateWifiRouterPage');
  }
  createWifiRouter(){
    console.log(this.navParams.get('home_id'));
        let obj={
          "action":"add",
          "ssid": this.ssid,
          "password": this.pass,
          "home": this.navParams.get('home_id')
        }
        let obj2={
          "name": this.ssid,
          "password": this.pass
        }
        this.ds.postCreateWifiRouter(obj,
        data => {
                console.log(data);
                 // this.toaster("home added successfully!");toastHere
                 this.routers.push(obj2);
                  this.navCtrl.pop();
        
         },error=>{

        });
        
  }

}
