import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

//pages
import { BrandsPage } from '../brands/brands';
import { SetUpRemotePage } from '../set-up-remote/set-up-remote';

@Component({
  selector: 'page-configure-remote',
  templateUrl: 'configure-remote.html'
})
export class ConfigureRemotePage {
brand;codeset;select;selectCode;dis;disCode;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ev:Events) {
  }

  ionViewWillEnter() {
    
    this.ev.subscribe('brand',(brand)=>{
              this.brand =  brand;
    })
    if(this.brand=="undefined"||this.brand==null){
      this.select = false;
    }
    else this.select = true;
  if(this.select == false) this.disCode = true;
  else this.disCode = false;
   if(this.codeset=="undefined"||this.codeset==null){
      this.selectCode = false;
    }
    else this.selectCode = true;
   if(this.select==true && this.selectCode==true){
            this.dis = false;
   }
   else this.dis = true;
 
  }

  goToBrandsPage(){
    let type= this.navParams.get('type');
    this.navCtrl.push(BrandsPage,
      {
        type:type,
        brand:this.brand,
        select:this.select
      });

     //modal.present();
  }
  deleteBrand(){
    this.brand = null;
    this.select = false;
    this.disCode = true;
  }
  goToSetUpRemote(){
        this.navCtrl.push(SetUpRemotePage,{
              brand:this.brand,
              type:this.navParams.get('type')

        })
  }

}
/*
@Component({
  template:`
                  <ion-header> 
                  <ion-navbar>         
                    <ion-title>Select IR Appliance</ion-title> 
                    <ion-buttons end class="txt-gold"> 
                    <button clear ion-button>
                      <ion-icon item-right name="close" class="txt-white"></ion-icon>
                    </button> 
                  </ion-buttons>
                  </ion-navbar>  
                </ion-header> 
                <ion-content no-padding> 
                  <ion-item-group>
                    <ion-item-divider class="itm-divider-btom bdr-btom-none">
                      <span class="txt-orange"> Select Appliance Brand</span>
                    </ion-item-divider>
                    <ion-searchbar                         
                          [showCancelButton]="shouldShowCancel"
                          (ionInput)="filterItems($event)"
                          placeholder="Search your Brand"
                          autocomplete="on"  class="bg-none"></ion-searchbar> 
                  </ion-item-group>
                  <br>
                  <ion-list class="itm-divider">   
                  <ion-item class="itm bdr-top-none" *ngFor="let i of data2" >
                  <button ion-item class="itm" (click)="selectBrand(i)">
                          <span>{{i}}</span>
                  </button>
                  </ion-item>
                </ion-list>  
                </ion-content> 
            `
})
export class BrandModal{
type;data;codeset;data2;brand;select;
  constructor(public viewCtrl:ViewController,public navParams:NavParams,private ds:DataService){
         this.initializeItems();
         this.brand=this.navParams.get('brand');
         this.select = this.navParams.get('select');
  }
     initializeItems(){
    
    this.type = this.navParams.get('type');  
     this.ds.getBrands(this.type,
     data => {
        this.data = data;
        console.log(this.type);
         this.data = this.data[0].brand_codeset[0];
         this.codeset = this.data;
         this.data = Object.keys(this.data);
         this.data.sort(function(a:any,b:any){ 
            var x = a < b? -1:1; 
            return x; 
            });
        this.data2 = this.data;
        console.log(this.data2);
     },
     (error)=>{

     })
  }
  
  filterItems(ev:any){
        this.data2=this.data;
        let val = ev.target.value;
        
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data2 = this.data2.filter((item:any) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }    
 
    }
    
    selectBrand(i){
      this.brand = i;
      this.select = true;
      this.viewCtrl.dismiss();
    }

}*/