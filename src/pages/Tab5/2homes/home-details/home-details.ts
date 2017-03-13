import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ToastController } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';
import { LocalStorageService } from '../../../../providers/LocalStorageService';
import { AlertService } from '../../../../providers/AlertService';

//pages
import { HomeUsersPage } from '../home-users/home-users';
import { EditHomePage } from '../edit-home/edit-home';
import { DisplayWifiRoutersPage } from '../display-wifi-routers/display-wifi-routers';

@Component({
  selector: 'page-home-details',
  templateUrl: 'home-details.html'
})
export class HomeDetailsPage {
home;home_name;home_dName;latlong;def;lat:string;long:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private ds:DataService,private toastCtrl:ToastController,private local:LocalStorageService,private alert:AlertService) {
     this.home = this.navParams.get('home');
    if(this.home._id == this.local.getDefaultHome()){
      this.def = "yes";
    }
    else this.def="no";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailsPage');
   
  }
  ionViewWillEnter(){
       
    this.home_dName = this.home.display_name;
    this.home_name = this.home.name;
    this.lat = this.home.lati.slice(0,5);
    this.long = this.home.longi.slice(0,5);
  }

  deleteHome(){
    if(this.local.getDefaultHome()!=this.home._id){
       /* let confirm = this.alertCtrl.create({
          title: 'Delete Home?',
          message: 'Deleting a home deletes all the rooms and settings from your profile',
          buttons: [
            {
              text: 'Cancel',
              handler: () => {
                            console.log('Disagree clicked');
              }
            },
            {
              text: 'Delete',
              handler: () => {
                console.log('Agree clicked');
                this.ds.postDeleteHome({
                  'home':this.home._id
                  },data => {
                    console.log(data);
                      this.toaster("Home Deleted");
                    // this.toaster("home added successfully!");toastHere
                      this.navCtrl.pop();
                  },error=>{

                    });
              
                //this.navCtrl.pop();
              }
            }
          ]
        });
        confirm.present();*/
        this.alert.showConfirm("Delete Home?","Deleting a home deletes all the rooms and settings from your profile","Cancel","Delete",
        ()=>{
               console.log('Disagree clicked');
        },()=>{


                 console.log('Agree clicked');
                this.ds.postDeleteHome({
                  'home':this.home._id
                  },data => {
                    console.log(data);
                      this.toaster("Home Deleted");
                    // this.toaster("home added successfully!");toastHere
                      this.navCtrl.pop();
                  },error=>{

                    });

        });


    }
    else{
          this.alert.showAlert('Cannot Delete','Default Home can not be deleted, please change your default home');

  }
  }
   toaster(info){
    let toast = this.toastCtrl.create({
                    message: info,
                        duration: 2500
                        });
                  toast.present();
}
goToWifiRouters()
{
      this.navCtrl.push(DisplayWifiRoutersPage,
      {
        home:this.navParams.get('home')
      });
}
  goToHomeUsers(){
      this.navCtrl.push(HomeUsersPage,{
        home:this.navParams.get('home')
      })
  }
  goToEditHome(){
    this.navCtrl.push(EditHomePage,{
      home:this.navParams.get('home')
    })
  }
}
