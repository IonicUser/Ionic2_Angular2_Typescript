import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

@Component({
  selector: 'page-edit-ir-app',
  templateUrl: 'edit-ir-app.html'
})
export class EditIrAppPage {
items;room;sb;disSb;appliance;name;sb_id;room_name;paired_sb_name;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditIrAppPage');
    this.appliance = this.navParams.get('appliance');
    this.name = this.appliance.name;
         this.ds.getSboards(this.navParams.get('home_id'),
          (data)=>{
                  console.log(data);
                  this.items = data;
                  for(let i of this.items){
                        if(i.room_id == this.appliance.room_id._id){
                          i.selected = true;
                          this.sb = i.devices;
                          for(let j of this.sb){
                            if(j._id == this.appliance.paired_sb._id){
                              j.selected = true;
                            }
                            else j.selected=false;
                          }
                        }
                        else i.selected = false;
                  }
        },
           (error)=>{
             console.log(error);
            console.log(JSON.stringify(error.json()));

        });
  }
    onRoomChange(){
        console.log(this.room);

        for(let i of this.items){
        if(i.room_id ==this.room){
              this.sb  = i.devices;
              console.log(this.sb);
              this.room_name = i.room_name;
        }
        }
        this.disSb = false;
  }
  updateIrApp(){
    let obj = {
          "id":this.appliance._id,
          "name":this.name,
          "room_id":this.room,
          "paired_sb":this.sb_id
    };
    this.ds.postEditIrApp(obj,
        (data)=>{
              console.log(data);
              this.appliance.name = this.name;
              this.appliance.room_id.name=this.room_name;
              for(let k of this.sb){
                if(k._id == this.sb._id)
                    this.paired_sb_name = k.name;
              }
              this.appliance.paired_sb.sboard_name = this.paired_sb_name; 
              this.navCtrl.pop();

        },
        (error)=>{

    });
  }

}
