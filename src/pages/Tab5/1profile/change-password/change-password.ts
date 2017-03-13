import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../../../providers/DataService';


@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
new1;new2;old;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }
  changePassword(){
    if(this.new1!=this.new2){
        //toastHere
    }
    else{
          let obj={
            "old_password": this.old,
            "new_password": this.new1
          }
          this.ds.postUpdatePassword(obj,
          data => {
              console.log(data);
            //toastHere
              this.navCtrl.pop();
        
        }, error => {
            //toastHere
          console.log(error);
            console.log(JSON.stringify(error.json()));
        });
    }
  }
}
