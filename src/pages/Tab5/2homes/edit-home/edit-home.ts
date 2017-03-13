import { Component,ElementRef,ViewChild } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { Keyboard,Geolocation } from 'ionic-native';


//providers
import { DataService } from '../../../../providers/DataService';
import { LocalStorageService } from '../../../../providers/LocalStorageService';
import { AlertService } from '../../../../providers/AlertService';

declare var cordova;

@Component({
  selector: 'page-edit-home',
  templateUrl: 'edit-home.html'
})

export class EditHomePage {
home;home_name;home_dName;latlong=[];latlong1=[];notDefault;obj;grab;lat:string;long:string;defDisable;
@ViewChild('myInput') focusIn;
  constructor(public navCtrl: NavController, public navParams: NavParams,private elem:ElementRef,private ds:DataService,private toastCtrl:ToastController,private local:LocalStorageService,private alert:AlertService) {

          this.home = this.navParams.get('home');
          console.log(this.home);
          this.home_dName = this.home.display_name;
          this.home_name = this.home.name;
          this.latlong = this.home.latlong;
          if(this.local.getDefaultHome()==this.home._id) this.notDefault = false;
          else this.notDefault = true;
           this.obj = this.local.getUser();
           this.grab=false;
          this.defDisable=false;
           console.log(this.latlong);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditHomePage');
    //this.focusIn.setFocus();
   // Keyboard.show();
   cordova.plugins.Keyboard.show();

  }
  editHome(){
    let obj2={
                display_name: this.home_dName,
                home: this.home._id,
                lati:this.latlong1[0],
                longi:this.latlong1[1]
              };
      this.ds.postEditHome(obj2,
              data => {
                console.log(data);
                this.toaster("Edit Successful");
                this.home.display_name = this.home_dName;
                this.home.latlong = this.latlong1;
                this.navCtrl.pop();
              },
              error =>{
                  this.toaster("error, cannot edit home");
              });
              
  }

  makeDefaultHome(){
    let obj={
              "default_home": this.home._id
            }
           this.ds.putEditProfile(obj,data => {
          console.log(data);
          //toastHere
          this.local.setUser(this.obj);
          this.local.setDefaultHome(this.home._id);
          this.defDisable=true;
        }, error => {
            console.log(error);
            console.log(JSON.stringify(error.json()));
        });

  }
  toaster(info){
    let toast = this.toastCtrl.create({
                    message: info,
                        duration: 2500
                        });
                  toast.present();
}
locate(){
     // this.latlong = this.latlong1;
        this.alert.showConfirm("Grab current location?","Your current location is taken as home's location","Cancel","Okay",
  ()=>{
            console.log("Cancel");
  },()=>{
            Geolocation.getCurrentPosition().then(res => {
            this.latlong1[0]=JSON.stringify (res.coords.latitude);
            this.latlong1[1]=JSON.stringify(res.coords.longitude);
            console.log(this.latlong);
             this.latlong=this.latlong1;
              this.lat = this.latlong1[0].slice(0,5);
              this.long = this.latlong1[1].slice(0,5);
              this.grab = true;
              }).catch((error) => {
                console.log('Error getting location', error);
                this.alert.showAlert("Error","Cannot grab location");
              });



  });
}


}
