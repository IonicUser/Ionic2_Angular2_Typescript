import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,reorderArray } from 'ionic-angular';


//providers
import { DataService } from '../../../../providers/DataService';
import { Helper } from '../../../../providers/Helper';

//pages
import { CreateRoomPage } from '../createroom/createroom';
import { SwitchBoardDisplayPage } from '../../4sboards/switch-board-display/switch-board-display';
import { RoomDetailsPage } from '../room-details/room-details';



@Component({
  selector: 'page-display-rooms',
  templateUrl: 'display-rooms.html',
  providers: []
})
export class DisplayRoomsPage {
  public userRoomsData=[]; 
  show;

  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService,private alertCtrl:AlertController,private help:Helper) { 

  }
  home_name;param;items;token;data;room_id;room_type;room_image;items2;items1=[];home_id1;

  ionViewWillEnter() {
          this.ds.getUserRooms(
            data => {
              this.userRoomsData=data;
              console.log(data);
              
            }, error => {
                console.log(error);
                console.log(JSON.stringify(error.json()));
            });
   
    if(this.help.isEmpty(this.userRoomsData)==true) this.show = false;
              else this.show = true;

  }

showPrompt(){
    console.log(this.param._id);
    this.navCtrl.push(CreateRoomPage,{
        home:this.param._id
    });
}

goToRoomDetails(item){
  console.log(item);
    this.navCtrl.push(RoomDetailsPage,{
        room: item
    });
}
goToCreateRoom(){
    this.navCtrl.push(CreateRoomPage,{
      home:this.home_id1,
      userRoomsData:this.userRoomsData,
      show:this.show
    });
}


}
