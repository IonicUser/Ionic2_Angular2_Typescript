import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';
//providers
import { DataService } from '../../../../providers/DataService';
@Component({
  selector: 'page-createsboard',
  templateUrl: 'createsboard.html',
  providers: [HttpServ, DataService]
})
export class CreatesboardPage {
  public roomArray: [{ room_name: '', room_id: '' }];
  public roomArrayData: [{ room_name: '', room_id: '' }];
  public newRoomdata: [{ roomName: '', roomId: '' }];

  public registerSwitchBoardCredentials = {
    switchBoardName: '',
    device_id: '',
    device_type: '',
    sType: '',
    roomId: ''
  }
  public data;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ, private toastCtrl: ToastController, public ds: DataService) {
    this.getRoomsList(this.navParams.get('homeId'))

  }
  public getRoomsList(id: any) {
    this.ds.getHomesRooms(id,
      (data) => {
        this.roomArrayData = data.rooms;

      },
      (error) => {
        console.log(JSON.stringify(error.json()));

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatesboardPage');
  }

  registerSwitchBoard() {
    console.log(this.navParams.get('room'));
    let obj2 = {
      "device": this.registerSwitchBoardCredentials.device_id,
      "room": this.registerSwitchBoardCredentials.roomId,
      "home": this.navParams.get('homeId'),
      "device_type": this.registerSwitchBoardCredentials.device_type,
      "name": this.registerSwitchBoardCredentials.switchBoardName,
      "s_type": this.registerSwitchBoardCredentials.sType
    }
    this.ht.postMe('sboards/new', obj2)
      .subscribe(data => {
        console.log(data);
        this.data = data;
        let toast = this.toastCtrl.create({
          message: 'Switch Board was added successfully',
          duration: 3000
        });
        toast.present();
        this.navCtrl.pop();

      }, error => {
        //     let alert1 = this.alertCtrl.create({
        //       title: 'Registration Failed',
        //       subTitle: 'Check',
        //       buttons: ['OK']
        //     });
        //   alert1.present();
        console.log(error);
        console.log(JSON.stringify(error.json()));
      });
  }

}
