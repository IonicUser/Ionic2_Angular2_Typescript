import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//pages
import { EditIrAppPage } from '../edit-ir-app/edit-ir-app';

//providers
import { DataService } from '../../../../providers/DataService';

@Component({
  selector: 'page-ir-app-details',
  templateUrl: 'ir-app-details.html'
})
export class IrAppDetailsPage {
appliance;name;type;brand;room_id;home_name;paired_sb;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
    this.appliance = this.navParams.get('appliance');
  }

  ionViewWillEnter() {
      this.name= this.appliance.name;
      this.type = this.appliance.type;
      this.brand=this.appliance.brand;
      this.room_id=this.appliance.room_id.name;
      this.paired_sb = this.appliance.paired_sb.sboard_name;
      this.home_name = this.navParams.get('home').display_name;
      console.log(this.appliance._id);
  }
  goToEditIrApp(){
        this.navCtrl.push(EditIrAppPage,{
          appliance:this.appliance,
          home_id:this.navParams.get('home')._id
        })
  }

  deleteIr(){
    let obj={
      "id":this.appliance._id
    };
        this.ds.postDeleteIrApp(obj,
        (data)=>{
              console.log(data);
              this.navCtrl.pop();
        },
        (error)=>{
              console.log(error);
        });
  }

}
