import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';


@Component({
  selector: 'page-pending-user-details',
  templateUrl: 'pending-user-details.html'
})
export class PendingUserDetailsPage {
param;name;phone;data;_id;other;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
    this.name=this.navParams.get('name');
    this.phone = this.navParams.get('phone');
    this.data=this.navParams.get('data');
    this._id=this.navParams.get('_id');
    this.other = this.navParams.get('other');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingUserDetailsPage');
  }
approve(status){
      let obj={
       "req_id": this.navParams.get('req'),
       "status":status
      }
      let obj2 ={
            "_id" : this._id,
            "phone":this.phone,
            "name":this.name
      };
      this.ds.postApproveJoinRequest(obj,
            data => {
                console.log(data);
                if(status=="confirm")
                this.other.push(obj2);
                console.log(this.other);
                //this.toaster("Edit Successful");//toastHere
                this.navCtrl.pop();
                
              },
              error =>{
                  //this.toaster("error, cannot edit home");/toastHere
              })
      
}
}
