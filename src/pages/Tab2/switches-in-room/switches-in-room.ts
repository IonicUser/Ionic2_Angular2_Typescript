import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//providers
import { DataService } from '../../../providers/DataService';
import { LocalStorageService } from '../../../providers/LocalStorageService';


@Component({
  selector: 'page-switches-in-room',
  templateUrl: 'switches-in-room.html'
})
export class SwitchesInRoomPage {
  public roomName: string;
  public isActive: boolean;
  public switchShow: string;
  room; switches = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataService) {
    this.room = this.navParams.get('room');
    this.roomName = this.navParams.get('roomName');
    this.isActive = false;
    //let k = 0;
    // for (let i of this.room.devices) {
    //   for (let j of i.switchappliances) {
    //     this.switches[k++] = j;
    //   }
    // }
    // console.log(this.switches);

  }
  public roundProgressClick(switchData: any, roomDetails: any) {
    let swithOnorOff;
    this.isActive = !this.isActive;
    this.switchShow = switchData._id;
    if (this.isActive) swithOnorOff = '1';
    else swithOnorOff = '0';

    let unix = Math.round(+new Date() / 1000);
    let obj = {
      "device": roomDetails.device_id,
      "sb": switchData.sboard_id,
      "act": switchData.switch_no + swithOnorOff,
      "key": unix,
      "mobId": "9015555",
      "act_type": "switch"
    }

    this.ds.postDeviceevents(obj,
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      });

  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SwitchesInRoomPage');
  }

}
