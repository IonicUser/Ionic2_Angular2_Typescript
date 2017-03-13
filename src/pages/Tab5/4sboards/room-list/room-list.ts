import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { SboardListPage } from '../sboard-list/sboard-list';
import { DisplaySwitchesPage } from '../../5switches/display-switches/display-switches';

@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListPage {
items;param;home_name;items1=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private ht:HttpServ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomListPage');
  }
   ionViewWillEnter() {
    //console.log('ionViewDidLoad DisplayRoomsPage');
    this.param= JSON.parse(this.navParams.get('home'));
    this.home_name = this.param.name;
    this.ht.getMe('rooms/myrooms?home='+this.param._id)
        .subscribe(data => {
          console.log(data);
          this.items = data;
          //this.items = JSON.parse(this.items._body);
          this.items = this.items.rooms;
          console.log(this.items);
          let j=0;
          for(let i of this.items){
              this.items1[j] = i.name;
              j=j+1;
          }
        }, error => {
            console.log(error);
            console.log(JSON.stringify(error.json()));
        });
    
    
    
  }
  goNext(item){
    //console.log(item);
    if(this.navParams.get('for')=='sboards'){
          this.navCtrl.push(SboardListPage,{
              param:item
          })
    }
    if(this.navParams.get('for') == 'switches'){
          this.navCtrl.push(DisplaySwitchesPage,{
            param:item
          })
    }
  }

}
