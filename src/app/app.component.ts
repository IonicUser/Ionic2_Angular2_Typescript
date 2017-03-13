import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';
import { NgZone } from "@angular/core";
import { ModalController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs.page';
import { SliderPage } from '../pages/Start/slider/slider.page';

@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`,
    providers: []
})

export class MyApp {
    rootPage: any;
    constructor(platform: Platform) {

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (localStorage.getItem("token") == "" || localStorage.getItem("token") == "undefined" || localStorage.getItem("token") == "null" || localStorage.getItem("token") == null) this.rootPage = SliderPage;
            else this.rootPage = TabsPage;
            //StatusBar.styleDefault();
            StatusBar.overlaysWebView(true);
            StatusBar.backgroundColorByHexString('#181818');
            Splashscreen.hide();


            let db = new SQLite();
            db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(() => {
                //Table for Home Data
                // db.executeSql("CREATE TABLE IF NOT EXISTS HomeDataTable (id INTEGER PRIMARY KEY AUTOINCREMENT, TagName TEXT, HomeData TEXT)", {}).then((data) => {
                //     console.log("TABLE CREATED: ", data);
                // }, (error) => {
                //     console.error("Unable to execute sql", error);
                // });

                //Table for SwitchApplianceDataTable Data
                db.executeSql("CREATE TABLE IF NOT EXISTS SwitchApplianceDataTable (id INTEGER PRIMARY KEY AUTOINCREMENT, roomId TEXT, roomName TEXT,switchBoardId TEXT,switchBoardName TEXT,switchType TEXT,is_configured TEXT,switchId TEXT,switchName TEXT,switchNumber TEXT,appliance_type TEXT)", {}).then((data) => {
                    console.log("INSERTED: " + JSON.stringify(data));
                }, (error) => {
                    console.log("ERROR: " + JSON.stringify(error.err));
                });

            }, (error) => {
                console.error("Unable to open database", error);
            });


        });

    }


}
