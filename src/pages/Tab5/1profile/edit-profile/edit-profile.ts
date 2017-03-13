import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';
import { LocalStorageService } from '../../../../providers/LocalStorageService';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
name;gender;def;items;data;obj;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService,private local:LocalStorageService) {
       this.obj = JSON.parse(this.local.getUser());
        /*this.ds.getUserHomes(data => {
          console.log(data);
          this.items = data;
          this.items = JSON.parse(this.items._body);
        }, error => {
            console.log(error);
            console.log(JSON.stringify(error.json()));
        });  */ 
        this.name=this.obj.name;
        this.def = this.obj.default_home;
        this.gender = this.obj.gender;
     /*   for(let i of this.items){
          if(i._id ==  this.def) i.selected=true;
          else i.selected=false;
          }*/
  } 

  ionViewDidLoad() {

  }
  updateProfile(){
    /*let obj = {
        "default_home": this.def,
        "name": this.name,
        "gender": this.gender
    };*/
    
    this.obj.default_home=this.def;
    this.obj.name =this.name;
    this.obj.gender=this.gender;
    this.ds.putEditProfile(this.obj,data => {
          console.log(data);
          //toastHere
          this.navCtrl.pop();
          this.local.setUser(JSON.stringify(this.obj));
          this.local.setDefaultHome(this.def);
        }, error => {
            console.log(error);
            console.log(JSON.stringify(error.json()));
        });
    /*this.ht.getMe('users/me')   
        .subscribe(data => {
          console.log(data);
          this.data = data;
          this.data = JSON.parse(this.data._body);
          localStorage.setItem('user',JSON.stringify(this.data));
          //toastHere
        }, error => {
            console.log(error);
            console.log(JSON.stringify(error.json()));
        });*/
        
  }

}
