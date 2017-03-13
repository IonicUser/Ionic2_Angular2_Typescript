import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { Helper } from '../../../../providers/Helper';

//pages
import { CreateWifiRouterPage } from '../create-wifi-router/create-wifi-router';
import { WifiDetailsPage } from '../wifi-details/wifi-details';

@Component({
  selector: 'page-display-wifi-routers',
  templateUrl: 'display-wifi-routers.html'
})
export class DisplayWifiRoutersPage {
home=this.navParams.get('home');
routers;Empty;
  constructor(public navCtrl: NavController, public navParams: NavParams,private help:Helper) {
        this.routers = this.home.wifi_details;
  }
ionViewWillLoad(){
        if(this.help.isEmpty(this.home.wifi_details)==true) this.Empty = true;
        else this.Empty = false;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayWifiRoutersPage');
  }
 
goToAddWifiRouter(){
        console.log(this.home._id);
        this.navCtrl.push(CreateWifiRouterPage,{
          home_id:this.home._id,
          routers:this.home.wifi_details
        });
}
goToDetail(wifi){
    this.navCtrl.push(WifiDetailsPage,{
      wifi:wifi,
      home:this.home
    })
}
}
