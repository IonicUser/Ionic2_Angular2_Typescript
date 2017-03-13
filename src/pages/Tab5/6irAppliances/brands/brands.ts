import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController,Events } from 'ionic-angular';

//providers
import { DataService } from '../../../../providers/DataService';

//pages
import { RemoteSelectPage } from '../remote-select/remote-select';


@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
  providers: []
})
export class BrandsPage {
type:any;data:any;data2:any;showList:any;codeset:any;select;brand;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private loading:LoadingController,private ds:DataService,private ev:Events) {
      this.initializeItems();
      this.brand = this.navParams.get('brand');
      this.select = this.navParams.get('select');
  }
i:any;loader:any;
  ionViewDidLoad() {

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
    
   codeDisplay(brand:any){
      this.brand = brand;
      this.select = true;
      this.ev.publish('brand',this.brand);
      console.log(this.brand);
      this.navCtrl.pop();
   }

}
