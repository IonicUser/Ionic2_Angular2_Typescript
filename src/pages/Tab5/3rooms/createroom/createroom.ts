import { Component, OnInit } from '@angular/core';
import { NavController, NavParams,ToastController,AlertController } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

//pages
import { RegisterHomePage } from '../../2homes/registerhome/registerhome';
import { LoginPage } from '../../../Start/login/login';


@Component({
  selector: 'ib-page-createRoom',
  templateUrl: 'createroom.html',
  providers : []
})
export class CreateRoomPage { 
   token;
   parameter;
   rName;
   rType;
   data;show;room1;home1;items;userRoomsData;
   registerRoomCredentials = {roomName: '', roomType: ''};
   constructor(private navCtrl: NavController, public navParams: NavParams, private ds: DataService, public alertCtrl: AlertController,private toastCtrl:ToastController) {
     this.parameter = navParams.get('home');
     this.show=this.navParams.get('show');
   //  this.show = true;
      this.userRoomsData = this.navParams.get('userRoomsData');
      this.ds.getUserHomes(data => {
          console.log(data);
          this.items = data;
         // this.items = JSON.parse(this.items._body);
        }, error => {
            console.log(error);
            console.log(JSON.stringify(error.json()));
        });  
   } 
home_id;
   registerRoom(){
      
      this.rName = this.registerRoomCredentials.roomName;
      this.rType = this.registerRoomCredentials.roomType;
      console.log(this.rType);
        let obj = { 
              "name": this.rName,
              "home": this.home_id,
              "_id":this.home_id,
              "room_type": this.rType
        }
        this.ds.postCreateRoom(obj,
        data => {
          console.log(data);
          this.data = data;
          for(let i of this.userRoomsData){
                if(i.home_id == this.home_id)
                    i.rooms.push(obj);
          }
        /*  let toast = this.toastCtrl.create({
            message: 'Room was added successfully',
                duration: 3000
                });
        toast.present();*/
          this.show = true;
          this.navCtrl.pop();
        
        }, error => {

          console.log(error);
            console.log(JSON.stringify(error.json()));
        });
      } 
}