import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';
import { AlertService } from '../../../../providers/AlertService';
import { Helper } from '../../../../providers/Helper';

//pages
import { ConfigureRemotePage } from '../configure-remote/configure-remote';

@Component({
  selector: 'page-create-ir-app',
  templateUrl: 'create-ir-app.html'
})
export class CreateIrAppPage {
data;name;room_id;type;items;items1=[];disSb;sb;room;sb_id;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService,private alert:AlertService,private help:Helper) {
        this.disSb = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIrAppPage');
     this.ds.getSboards(this.navParams.get('home_id'),
          (data)=>{
                  console.log(data);
                  this.items = data;
        },
           (error)=>{
             console.log(error);
            console.log(JSON.stringify(error.json()));

        });
  }
  goToConfigure(){
    if(this.help.isEmpty(this.room)==false&&this.help.isEmpty(this.sb_id)==false&&this.help.isEmpty(this.name)==false&&this.help.isEmpty(this.type)==false){
    this.navCtrl.push(ConfigureRemotePage,{
          name:this.name,
          room_id:this.room,
          sb:this.sb_id,
          home_id:this.navParams.get('home'),
          type:this.type
    })
  }
  else{
    this.alert.showAlert("Fill the details","please fill all the fields to continue");
  }

  }
  onRoomChange(){
        console.log(this.room);
        for(let i of this.items){
        if(i.room_id ==this.room){
              this.sb  = i.devices;
              console.log(this.sb);
        }
        }
        this.disSb = false;


  }

}


