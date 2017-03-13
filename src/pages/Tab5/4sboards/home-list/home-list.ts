import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { SboardListPage } from '../sboard-list/sboard-list';
import { RoomListPage } from '../room-list/room-list';
import { DisplaySwitchesPage } from '../../5switches/display-switches/display-switches';
import { DisplayIrAppsPage } from '../../6irAppliances/display-ir-apps/display-ir-apps';


@Component({
  selector: 'page-home-list',
  templateUrl: 'home-list.html'
})
export class HomeListPage {
  show; data; items; irShow; swShow; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ) {



  }
  ionViewWillEnter() {
    let def = localStorage.getItem('default_home');
    this.ht.getMe('homes/myhomes')
      .subscribe(data => {
        console.log(data);
        this.data = data;
        // this.data = JSON.parse(this.data._body);
        this.items = this.data;
        for (let i of this.items) {
          if (i._id == def) i.isDefault = true;
          else i.isDefault = false;
        }
        //console.log(this.items);
      }, error => {
        console.log(error);
        console.log(JSON.stringify(error.json()));
      });
  }
  

  go(item){
    switch(this.navParams.get('for')){
      case 'sboards':
        this.navCtrl.push(SboardListPage, {
        home: item,
        homeName: item.display_name,
        for: this.navParams.get('for')
         });
         break;

      case 'switches':
        this.navCtrl.push(DisplaySwitchesPage, {
        home: item,
        homeName: item.display_name,
        for: this.navParams.get('for')
        });
        break;

      case 'ir':
              this.navCtrl.push(DisplayIrAppsPage, {
              home: item
              });
              break;

    }

  }

}
