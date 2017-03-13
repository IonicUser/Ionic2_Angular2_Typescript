import { Component,NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpServ } from '../../../providers/HttpServ';
@Component({
    selector: 'ib-page-home',
    templateUrl: 'home.page.html',
    providers : [HttpServ]
})
export class HomePage {
    toggle;
    constructor(public navCtrl: NavController,private ht:HttpServ) {
        this.toggle = false;
    }
    
    
    ionViewDidLoad(){
        //this.toggler = true;
        //this.easeInOutQuart = "easeInOutQuart";
    }
    toggler(){
        this.toggle = !this.toggle;
    }

}
