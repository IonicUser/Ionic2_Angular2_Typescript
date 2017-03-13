import { Component,OnInit } from '@angular/core';
import { AlertController,NavController,NavParams,Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

//SQLite Data base
import {SQLite} from "ionic-native";
//providers
import { DataService } from '../../../../providers/DataService';
import { LocalStorageService } from '../../../../providers/LocalStorageService';
import { Helper } from '../../../../providers/Helper';

//models
import { getHome } from '../../../../models/getHome';

//pages
import { TabsPage } from '../../../tabs/tabs.page';
import { UserhomesPage } from '../userhomes/userhomes';
import { HomeUsersPage } from '../home-users/home-users';
import { DisplayRoomsPage } from '../../3rooms/display-rooms/display-rooms';
import { CreateHomePage } from '../create-home/create-home';
import { HomeDetailsPage } from '../home-details/home-details';
import { JoinHomeSearchPage } from '../join-home-search/join-home-search';

@Component({
  selector: 'ib-page-registerHome',
  templateUrl: 'registerhome.html',
  providers : []
})

export class RegisterHomePage{

public database: SQLite;
public homeData: any[];

public sboards:boolean;
  homes:Array<getHome>=[];
  registerCredentials = {homeName: '', displayName: ''};
  homeName:string;
  token;
  dName:string;
  latitude:string;
  longitude:string;
  latlong=[];
  data;
  showError;
  items;
  show;

  constructor( public navCtrl: NavController,public alertCtrl:AlertController,private navParams:NavParams,private ds:DataService,private local:LocalStorageService,private help:Helper,private platform: Platform) {
   
     this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
                this.getHomeData();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });
    
  }
ionViewWillEnter() {

    let def = this.local.getDefaultHome();
        this.ds.getUserHomes((data)=>{
            console.log(data);
          this.data = data;
          //Adding home data to SQLite
        this.addHomeData(this.data);

          if(this.help.isEmpty(this.data)){
            this.show = false;
          }
          else this.show = true;
          //this.data = this.data._body;
          this.homes = this.data;
          for(let i of this.homes){
            if(i._id == def) i.isDefault=true;
            else i.isDefault = false;
            }
        },(error)=>{

        });
}



   public addHomeData(homeObj:any) {
        this.database.executeSql("INSERT INTO HomeDataTable (TagName, HomeData) VALUES ('home', homeObj)", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }
  


 public getHomeData() {
        this.database.executeSql("SELECT * FROM HomeDataTable", []).then((data) => {
            this.homeData = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.homeData.push({TagName: data.rows.item(i).TagName, HomeData: data.rows.item(i).HomeData});
                    
                }
                //adding data from Table to home Object
                 this.data= data.rows.item(i).HomeData;
               
                  console.log("SUCCESS: " + JSON.stringify( this.data));
            }
          
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

  homeDetails(item){
      this.navCtrl.push(HomeDetailsPage,{
        home:item
      })
  }
   goToCreateHome(){
     this.navCtrl.push(CreateHomePage,{
       show:this.show
    });
   }
  goToJoinHome(){
    this.navCtrl.push(JoinHomeSearchPage);
  }
}
