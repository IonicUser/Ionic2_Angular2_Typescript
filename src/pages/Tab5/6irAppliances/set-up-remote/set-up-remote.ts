import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

@Component({
  selector: 'page-set-up-remote',
  templateUrl: 'set-up-remote.html'
})
export class SetUpRemotePage {
data;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {

  }

  ionViewDidLoad() {
    this.ds.getTestCodeSets(this.navParams.get('brand'),this.navParams.get('type'),
      (data)=>{
            console.log(data);
            this.data = data;
       },
       (error)=>{

       });
  }

}
