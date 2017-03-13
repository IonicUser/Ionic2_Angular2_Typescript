import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';
import { Helper } from '../../../../providers/Helper';

//pages
import { PrimeUserDetailsPage } from '../prime-user-details/prime-user-details';
import { OtherUserDetailsPage } from '../other-user-details/other-user-details';
import { PendingUserDetailsPage } from '../pending-user-details/pending-user-details';

@Component({
  selector: 'page-home-users',
  templateUrl: 'home-users.html'
})
export class HomeUsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private ds:DataService,private help:Helper) { 

     this.json_obj = this.navParams.get('home');
  }
  prim_user;json_obj;other;show;data;showPending;pending=[];showOthers;
  ionViewWillEnter() {
      //this.show = false;
    //console.log(JSON.parse(this.navParams.get('home')));
   
    console.log(this.json_obj);
    this.prim_user = this.json_obj.prim_user.name;
    if(JSON.stringify(this.json_obj.other_users)!="[]"){
        console.log(JSON.stringify(this.json_obj.other_users));
        this.other = this.json_obj.other_users;
        this.show = true;
    }  
    //this.showPending=false;
    this.ds.getJoinRequests(
      data => {
               // this.showPending  = true;
                console.log(data);
                this.data = data;
               // this.data = JSON.parse(this.data._body);
                //this.data = this.data[0].user;
                console.log(this.data);
                let j=0;
                this.pending=[];
                this.showPending=false;
                for(let i of this.data){
                    if(i.home._id == this.json_obj._id&&i.status=="pending"){
                      this.showPending=true;
                      this.pending[j] = i.user;
                      this.pending[j].req = i._id;
                      j++;
                    }
                }
              //  if(this.help.isEmpty(this.pending)) this.showPending = false;
               // else this.showPending = true;
              },
              error =>{
                 // this.toaster("error, cannot edit home");
              });

    
  }
  showPrimDetails(){
      let alert = this.alertCtrl.create({
                  title: this.json_obj.prim_user.name,
                  message: this.json_obj.prim_user.phone+"  "+this.json_obj.prim_user.email,
                  buttons: ['OK']
                });
                alert.present();
  }
  showOtherDetails(i){
      let alert1 = this.alertCtrl.create({
                  title: i.name,
                  message: i.phone+"  "+i.email,
                  buttons: ['OK']
                });
                alert1.present();
  }
  goToPrimeUserDetails(){
        this.navCtrl.push(PrimeUserDetailsPage,{
          home : this.json_obj
        })
  }
   goToOtherUserDetails(param){
        this.navCtrl.push(OtherUserDetailsPage,{
            name: param.name,
            phone:param.phone,
            email:param.email,
            _id:param._id,
            home:this.json_obj._id,
            other:this.json_obj.other_users
        })
  }
  goToPendingUserDetails(param){
    console.log(param.req+"\n"+param);
    this.navCtrl.push(PendingUserDetailsPage,{
      _id:param._id,
      name: param.name,
      phone:param.phone,
      req:param.req,
      data:this.pending,
      other:this.json_obj.other_users
    })
  }
}
