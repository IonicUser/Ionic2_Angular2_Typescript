import { Component, OnInit } from '@angular/core';
import { NavController, App, AlertController, Platform } from 'ionic-angular';

//providers
import { DataService } from '../../../providers/DataService';
import { LocalStorageService } from '../../../providers/LocalStorageService';

//pages
import { SwitchesInRoomPage } from '../switches-in-room/switches-in-room';

//pipes
import { ActiveCounts } from '../../../providers/pipes/ActiveInactiveCount';
import { InactiveCounts } from '../../../providers/pipes/ActiveInactiveCount';

import { SQLite } from "ionic-native";



@Component({
  selector: 'ib-page-createHome',
  templateUrl: 'rooms.page.html',
  providers: []
})
export class RoomsPage {
  data;
  def;
  public database: SQLite;
  public people: Array<Object>;

  constructor(public navCtrl: NavController, private ds: DataService, public alertCtrl: AlertController, private app: App, private local: LocalStorageService, private platform: Platform) {
  //  this.defaultHomeData();

    this.platform.ready().then(() => {
      this.database = new SQLite();
      this.defaultHomeData();
      // this.database.openDatabase({ name: "data.db", location: "default" }).then(() => {
      //   //intiate local database SQLite
      // //  this.refresh();
      
      // }, (error) => {
      //   console.log("ERROR: ", error);
      // });
    });
  }
  //adding data to SQLite
  public add(data: any) {
    for (let room of data) {
      for (let devices of room.devices) {
        for (let switchappliances of devices.switchappliances) {
          this.database.executeSql("INSERT INTO SwitchApplianceDataTable (room._id, room.room_name,devices._id ,devices.name,switchappliances.switch_type,switchappliances.is_configured,switchappliances._id,switchappliances.name,switchappliances.switch_no,switchappliances.appliance_type)", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
          }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
          });


        }
      }
    }
  }


  //intiate local database SQLite
  // public refresh() {
  //   this.database.executeSql("CREATE TABLE IF NOT EXISTS SwitchApplianceDataTable (id INTEGER PRIMARY KEY AUTOINCREMENT, roomId TEXT, roomName TEXT,switchBoardId TEXT,switchBoardName TEXT,switchType TEXT,is_configured TEXT,switchId TEXT,switchName TEXT,switchNumber TEXT,appliance_type TEXT)", []).then((data) => {
  //     this.defaultHomeData();
  //     console.log("INSERTED: " + JSON.stringify(data));
  //   }, (error) => {
  //     console.log("ERROR: " + JSON.stringify(error.err));
  //   });

  // }

  public defaultHomeData() {
    this.def = this.local.getDefaultHome();
    this.ds.getSboards(this.def,
      data => {
        console.log(data);
        this.data = data;
        //adding data to SQLite
       // this.add(this.data)

        for (let room of data) {
      for (let devices of room.devices) {
        for (let switchappliances of devices.switchappliances) {

          console.log(room._id+'-'+ room.room_name+'-'+devices._id +'-'+devices.name+'-'+switchappliances.switch_type+'-'+switchappliances.is_configured+'-'+switchappliances._id+'-'+switchappliances.name+'-'+switchappliances.switch_no+'-'+switchappliances.appliance_type)
          
          this.database.executeSql("INSERT INTO SwitchApplianceDataTable ( roomId , roomName ,switchBoardId ,switchBoardName ,switchType ,is_configured ,switchId ,switchName,switchNumber,appliance_type) VALUES  (room._id, room.room_name,devices._id ,devices.name,switchappliances.switch_type,switchappliances.is_configured,switchappliances._id,switchappliances.name,switchappliances.switch_no,switchappliances.appliance_type)", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
          }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
          });


        }
      }
    }

        //console.log(this.items);
      }, error => {
        console.log(error);

      });

  }







  goToSwitchesinTheRoom(room, roomName) {
    this.navCtrl.push(SwitchesInRoomPage, {
      room: room,
      roomName: roomName
    });
  }
}