import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../providers/HttpServ';

/*
  Generated class for the RemoteSelect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remote-select',
  templateUrl: 'remote-select.html',
  providers : [HttpServ]
})
export class RemoteSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private ht:HttpServ) {}
data;
  ionViewDidLoad() {
   /* let opt: RequestOptions
   let myHeaders: Headers = new Headers
   myHeaders.set('Authorization', 'Bearer '+localStorage.getItem("token"));
   myHeaders.append('Content-type', 'application/json');
   opt = new RequestOptions({
     headers: myHeaders
    })  
  
    
    this.http.get('http://staging.feturtles.com:3002/api/v1/codesets/'+this.navParams.get('brand'),opt)
    */
    this.ht.getMe('codesets'+this.navParams.get('brand'))
    .subscribe(data => {
         this.data = data;
         this.data = JSON.parse(this.data._body);
         console.log(this.data);
     });

  }

}
