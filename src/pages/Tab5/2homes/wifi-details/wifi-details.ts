import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

//pages
import { EditWifiRouterPage } from '../edit-wifi-router/edit-wifi-router';

@Component({
  selector: 'page-wifi-details',
  templateUrl: 'wifi-details.html'
})
export class WifiDetailsPage {
ssid;id;pass;wifi;home
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
    this.wifi = this.navParams.get('wifi');
    this.home = this.navParams.get('home'); 
    this.id = this.home._id;

  }
 ionViewWillEnter() {
        this.ssid=this.wifi.name;
       this.pass =  this.wifi.password;
    //console.log('ionViewDidLoad EditWifiRouterPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WifiDetailsPage');
  }

  deleteRouter(){
          let obj={
          "action":"remove",
          "ssid": this.ssid,
          "home": this.id
        }
        this.ds.postDeleteWifiRouter(obj,
          data => {
                console.log(data);
                /*for(let i of this.home.wifi_details){
                if(i.name == this.ssid){
                      console.log(i);
                      i.splice();
                }

                }*/
                this.home.wifi_details.forEach((item,index)=>{
                  if(item.name == this.ssid) this.home.wifi_details.splice(index,1);
                })
                 // this.toaster("home added successfully!");
                  this.navCtrl.pop();
        },
        error=>  {

        });
     }
  goToEditRouter(){
          console.log(this.wifi);
          this.navCtrl.push(EditWifiRouterPage,{
            wifi: this.wifi,
            home:this.id
          })
  }

}
