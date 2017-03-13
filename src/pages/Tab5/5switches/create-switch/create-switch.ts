import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

@Component({
  selector: 'page-create-switch',
  templateUrl: 'create-switch.html',
  providers: [HttpServ]
})
export class CreateSwitchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ, private toastCtrl: ToastController) { }
  registerSw = {
    sName: "",
    sNum: "",
    sType: "",
    appType: ""
  };
  data;
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSwitchPage');
  }
  createSw() {

     let obj = {
        "switch_no": "1",
        "name": "fan",
        "switch_type": "toggle",
        "sboard_id": "584922e3b6de4b7de1c6f9a5",
        "appliance_type": "light"
}
    console.log(this.navParams.get('sboard_id'));
    this.ht.postMe('sboards/addswitch', obj)
      .subscribe(data => {
        console.log(data);
        this.data = data;
        let toast = this.toastCtrl.create({
          message: 'Appliance added successfully',
          duration: 3000
        });
        toast.present();
        this.navCtrl.pop();
      }, error => {
        console.log(error);
        console.log(JSON.stringify(error.json()));
      });
  }
}
