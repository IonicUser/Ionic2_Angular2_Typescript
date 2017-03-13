import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

import { roomModal } from '../room.modal';

@Component({
  selector: 'page-edit-room',
  templateUrl: 'edit-room.html'
})
export class EditRoomPage {
room;name;type;
public roomModal:roomModal;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ht:HttpServ) {
  		this.roomModal=this.room  =  this.navParams.get('room');
  		//this.name = this.room.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRoomPage');

  }
  editRoom(){
  	let updatedRoomData = {
		  "room": 	this.roomModal._id,
		  "name": 	this.roomModal.name,
		  "room_type": this.roomModal.room_type
  	};
  		this.ht.postMe('rooms/myroom',updatedRoomData)
  		.subscribe(data => {
                console.log(data+"Successfully Edited");
               // this.toaster("Edit Successful");
                this.navCtrl.pop();
              },
              error =>{
                 // this.toaster("error, cannot edit home");
              });
  	}





  }


