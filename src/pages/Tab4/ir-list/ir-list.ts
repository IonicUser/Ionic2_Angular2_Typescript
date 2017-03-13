import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { HttpServ } from '../../../providers/HttpServ';

//pages
//import { BrandsPage } from '../brands/brands';


@Component({
  selector: 'page-ir-list',
  templateUrl: 'ir-list.html',
  providers : [HttpServ] 
})
export class IrListPage {
data;icon_name;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ht:HttpServ,public loading:LoadingController) {
      this.icon_name = "md-menu";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IrListPage');
  let loader = this.loading.create({
      content: "Loading"
    });  
    loader.present();
    this.ht.getMe('appliances')
    .subscribe(data => {
         this.data = data;
         //this.data = JSON.parse(this.data._body);
         loader.dismiss();
         console.log(this.data);
     });
     
  }
 /* gotoIRApp(type){
      this.navCtrl.push(BrandsPage, {
      irType: type,
      });
  
     
  }*/
  getIcon(type){
      console.log(type);
      return "icon-home";
  }

}
