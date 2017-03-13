import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { EditRoomPage } from '../edit-room/edit-room';


@Component({
  selector: 'page-room-details',
  templateUrl: 'room-details.html'
})
export class RoomDetailsPage {
  room;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ) {

    this.room = this.navParams.get('room');
    console.log(this.room);
  }

  ionViewWillEnter() {

  }

  deleteRoom() {
    //AlertHere
    this.ht.postMe('rooms/myroom/delete', { room: this.room._id }).subscribe(data => {
      console.log(data + "Successfully Deleted");
      // this.toaster("Edit Successful");
      this.navCtrl.pop();
    },
      error => {
        // this.toaster("error, cannot edit home");
      });

  }
  goToEditRoom() {
    this.navCtrl.push(EditRoomPage, {
      room: this.room
    });
  }

}
