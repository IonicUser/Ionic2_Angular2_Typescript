import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

//providers
import { DataService } from '../../../../providers/DataService';
import { LocalStorageService } from '../../../../providers/LocalStorageService';
import { AlertService } from '../../../../providers/AlertService';


@Component({
  selector: 'page-create-home',
  templateUrl: 'create-home.html',
  providers: []
})
export class CreateHomePage {
  data; showError; response; latlong = []; def; show; grab;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataService, private toastCtrl: ToastController, private local: LocalStorageService, private alert: AlertService) {
    this.response = {
      name: "",
      dName: ""
    };
    this.show = this.navParams.get('show');
    this.grab = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateHomePage');
  }
  checkNameAvailablitiy(checkName) {

    this.ds.postCheckExisting({
      "name": checkName //object to send on post request

    }, data => {

      this.data = data;

      //this.data = JSON.parse(this.data._body);
      console.log(data);
      if (this.data.availaible == false) {
        this.showError = true;
      } else if (this.data.availaible == true) {
        this.showError = false;
      }
    },
      error => {
        //   //   let alert1 = this.alertCtrl.create({
        //   //     title: 'Registration Failed',
        //   //     subTitle: 'Check',
        //   //     buttons: ['OK']
        //   //   });
        //   // alert1.present();
        //   // console.log(error);
        //   //   console.log(JSON.stringify(error.json()));
      });

  }


  createHome() {
    if (this.validate()) {
      if (this.show == false) this.def = true;
      this.checkNameAvailablitiy(this.response.name);
      let obj = {
        "name": this.response.name,
        "display_name": this.response.dName,
        "is_default": this.def,
        "lati": this.latlong[0],
        "longi": this.latlong[1]
      };

      this.ds.postCreateHome(obj,
        data => {
          console.log(data);
          this.data = data;
          if (!this.showError) {
            this.toaster("home added successfully!");
            if (this.def == true) {
              this.local.setDefaultHome(this.data.home._id);
            }
            this.navCtrl.pop();
          }

        }, error => {
          this.toaster("Home name already exists, please try another name");
          console.log(error);
        });
    }
  }
  toaster(info) {
    let toast = this.toastCtrl.create({
      message: info,
      duration: 2500
    });
    toast.present();
  }
  validate() {
    if (this.response.dName.length > 15 || this.response.name.length > 15) {
      this.toaster("name must not exceed 15 characters");
      return false;
    }
    else return true;
  }

  locate() {

    this.alert.showConfirm("Grab current location?", "Your current location is taken as home's location", "Cancel", "Okay",
      () => {
        console.log("Cancel");
      }, () => {
        Geolocation.getCurrentPosition().then(res => {
          this.latlong[0] = JSON.stringify(res.coords.latitude);
          this.latlong[1] = JSON.stringify(res.coords.longitude);
          console.log(this.latlong);
          this.grab = true;
        }).catch((error) => {
          console.log('Error getting location', error);
          this.alert.showAlert("Error", "Cannot grab location");
        });

      });
  }

}
