import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { CreateSwitchPage } from '../create-switch/create-switch';

import { switchModal } from '../../5switches/switch.modal';
import { SwitchDetailsPage } from '../../5switches/switch-details/switchDetails';


@Component({
  selector: 'page-switch-edit',
  templateUrl: 'edit-switch.html',
  providers: [HttpServ]
})
export class EditSwitchPage implements OnInit {
  sboard_id; items;
  public homeData: any;
  public switchDetailsData: any;

  public switchModal:switchModal;
  public homeName: string;
  public sbNmae: string;
  public rmName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ) {
   this.switchModal= this.switchDetailsData = this.navParams.get('switch');
    this.homeName = this.navParams.get('homeName');
    this.sbNmae = this.navParams.get('sbNmae');
    this.rmName = this.navParams.get('rmName');

    this.switchModal._id = this.switchDetailsData._id;
    this.switchModal.switch_no = this.switchDetailsData.switch_no;
    this.switchModal.sboard_id = this.switchDetailsData.sboard_id;
    this.switchModal.switch_type = this.switchDetailsData.switch_type;
    this.switchModal.is_configured = this.switchDetailsData.is_configured;
  //  this.switchModal.name = '';
   // this.switchModal.appliance_type = '';
    this.switchModal.home_type = this.homeName;
    this.switchModal.room_type = this.rmName;
    this.switchModal.sboard_type = this.sbNmae;
  }


  ngOnInit() {

  }

  public addSwitch() {
    this.navCtrl.push(CreateSwitchPage, {
      sboard_id: this.sboard_id
    });
  }
  // public updateSwitch(value: any) {
  //   let obj = {
  //     "id": this.switchDetailsData._id,
  //     "switch_no": this.switchModal.switch_no,
  //     "name": value.name,
  //     "switch_type": value.switch_type,
  //     "sboard_id": this.switchDetailsData.sboard_id,
  //     "appliance_type": value.appliance_type,
  //      "is_configured":true
  //   }
  //   this.ht.updateSwitch(obj).subscribe(data => {
  //     //  alert(JSON.stringify(data))
  //     //  this.data = data;      
  //     this.navCtrl.pop();
  //     //  this.navCtrl.push(TabsPage);
  //   //  this.switchModal.is_configured=true;
  //   }, error => {
  //     //this.navCtrl.pop();
  //     console.log(JSON.stringify(error.json()));
  //   });

  // }

 
 public editSwitch(value){
    this.navCtrl.push(SwitchDetailsPage,{
         editSwitch:value,
          homeName: this.homeName,
          sbNmae:this.sbNmae,
          rmName:this.rmName,
          for:this.navParams.get('for')

      });
  }

}
