import { Component } from '@angular/core';
import { NavController, NavParams,App,AlertController } from 'ionic-angular';

//pages
import { LoginPage } from '../../../Start/login/login';
import { RegisterHomePage } from '../../2homes/registerhome/registerhome';
import { DisplayProfilePage } from '../display-profile/display-profile';
import { HomeListPage } from '../../4sboards/home-list/home-list';
import { DisplayRoomsPage } from '../../3rooms/display-rooms/display-rooms';
import { SboardListPage } from '../../4sboards/sboard-list/sboard-list';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.page.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App,private alertCtrl:AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  logout(){
    let alert = this.alertCtrl.create({
    title: 'Confirm Logout',
    message: 'Do you want to logout?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
            localStorage.setItem("token","");
            console.log(localStorage.getItem("token"));
            //window.location.reload();
            this.app.getRootNav().setRoot(LoginPage);
            //console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
  }
  goTomyHomes(){
      this.navCtrl.push(RegisterHomePage,{
          show: "1"
      });
  }
  goTomyHomesForRooms(){
      this.navCtrl.push(DisplayRoomsPage,{
          show: "0"
      });
  }
  goToDisplayProfile(){
    this.navCtrl.push(DisplayProfilePage);
  }
  goTomyHomesForSboards(){
    this.navCtrl.push(HomeListPage,{
      for:"sboards"
    });
  }
  goTomyHomesForSwitches(){
    this.navCtrl.push(HomeListPage,{
      for:"switches"
    });
  }
  goToHomeListForIR(){
    this.navCtrl.push(HomeListPage,{
      for:"ir"
    })
  }

}
