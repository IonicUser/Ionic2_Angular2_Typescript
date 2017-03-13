import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

@Component({
  selector: 'page-other-user-details',
  templateUrl: 'other-user-details.html'
})
export class OtherUserDetailsPage {
name;phone;email;other;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService) {
        this.name = this.navParams.get('name');
        this.phone = this.navParams.get('phone');
        this.email = this.navParams.get('email');
        this.other = this.navParams.get('other');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherUserDetailsPage');
  }
deleteUser(){
 let obj={
      "user": this.navParams.get('_id'),
      "home": this.navParams.get('home')
    }
  
     this.ds.postRemoveUser(obj,
     data =>{
          console.log(data);
          let j=0;
          for(let i of this.other){
            if(i._id = this.navParams.get('_id')){
              this.other.splice(j,1);
              console.log(this.other);
            }
            j++;
          }
          //alertHere
          this.navCtrl.pop();
     },error => {

     })
}
}
