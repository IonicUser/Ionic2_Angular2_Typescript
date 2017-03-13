import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

//pages
import { CreateIrAppPage } from '../create-ir-app/create-ir-app';
import { IrAppDetailsPage } from '../ir-app-details/ir-app-details';

@Component({
  selector: 'page-display-ir-apps',
  templateUrl: 'display-ir-apps.html'
})
export class DisplayIrAppsPage {
home;data;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
    this.home = this.navParams.get('home');
  }

  ionViewWillEnter() {
    this.ds.getIrAppliances(this.home._id,
      (data)=>{
          console.log(data);
          this.data = data;
      },
      (error)=>{

      });
      
    
  }
  goToIrDetails(item){
        this.navCtrl.push(IrAppDetailsPage,{
          appliance:item,
          home:this.home
        })

  }
  addIrAppliance(){
        this.navCtrl.push(CreateIrAppPage,{
              home_id:this.home._id
        });
  }

}
