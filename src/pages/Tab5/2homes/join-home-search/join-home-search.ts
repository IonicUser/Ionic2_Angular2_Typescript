import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';
import { LocalStorageService } from '../../../../providers/LocalStorageService';


@Component({
  selector: 'page-join-home-search',
  templateUrl: 'join-home-search.html'
})
export class JoinHomeSearchPage {
show;searchStr;data;home;user;showNotFound;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ds:DataService,private toastCtrl:ToastController) {
    this.show=false;
    this.showNotFound=false;
    this.searchStr="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinHomeSearchPage');
  }
  search(str){
    console.log(str);
    this.ds.getSearchHome(str,
                data => {
                console.log(data);
                this.data =data;
                //this.data = JSON.parse(this.data._body);
                console.log(this.data);
                this.data = this.data[0];
                this.home = this.data.name;
                this.user = this.data.prim_user;
                this.user = this.user.name;
                this.showNotFound=false;
                this.show = true;
              },
              error =>{
                this.show = false;
                this.showNotFound=true;
                  //this.toaster("error, cannot edit home");toastHere
              });
    
  }
  sendJoinRequest(){
    this.ds.postJoinRequest({
      name:this.home
    },
    data => {
                console.log(data);
                this.toaster("Join request sent to "+this.user);
              },
    error =>  {
                console.log(error);
                  //this.toaster("error, cannot edit home");//toastHere
              });
    
  }
   toaster(info){
    let toast = this.toastCtrl.create({
                    message: info,
                        duration: 2500
                        });
                  toast.present();
}
}
