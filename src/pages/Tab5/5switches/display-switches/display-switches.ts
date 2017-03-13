import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { CreateSwitchPage } from '../create-switch/create-switch';
import { SwitchDetailsPage } from '../../5switches/switch-details/switchDetails';
import { EditSwitchPage } from '../../5switches/edit-switch/edit-switch';



@Component({
  selector: 'page-display-switches',
  templateUrl: 'display-switches.html',
  providers : [HttpServ]
})
export class DisplaySwitchesPage implements OnInit {
sboard_id;items;
public homeData:any;
public homeName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ht:HttpServ) {
     // this.sboard_id = this.navParams.get('sboard_id');
      //this.items = this.sObj.switch_appialnces;
       this.homeData = this.navParams.get('home');
       this.homeName = this.navParams.get('homeName');
      this.ht.getMe('sboards/mysboards?home='+ this.homeData._id)
    .subscribe(data =>{
        this.items = data;
        console.log(JSON.stringify( this.items))
       // this.items = JSON.parse(this.items._body);
       // this.items = this.items.switch_appialnces; 
    });
  }

 ngOnInit() {    
  }

  public addSwitch(){
      this.navCtrl.push(CreateSwitchPage,{
          sboard_id: this.sboard_id,
          homename: this.homeName
      });
  }

 public goToSwitchDetails(value,sbNmae,rmName,isConigured){   
     
     if(!isConigured){
         this.navCtrl.push(SwitchDetailsPage,{
         editSwitch:value,
          homeName: this.homeName,
          sbNmae:sbNmae,
          rmName:rmName,
          for:this.navParams.get('for')

      });

     }else{
    this.navCtrl.push(EditSwitchPage,{
         switch:value,
          homeName: this.homeName,
          sbNmae:sbNmae,
          rmName:rmName,
          for:this.navParams.get('for')

      });
  }
 }
  
}
