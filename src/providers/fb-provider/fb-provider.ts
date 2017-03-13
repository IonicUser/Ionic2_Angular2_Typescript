import {Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';
import { Facebook } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/Rx';


@Injectable()
export class FbProvider {
    platform;
    constructor( platform: Platform ) {
        this.platform = platform;
    }
    facebookConnectPlugin:Facebook;
    p:any;
    login() {
       // Facebook.login([ "email" ]).then (success) => {  },(err) => {  });
        this.p = new Promise((resolve) => {
        if(this.platform.is('cordova')) {
            Facebook.login([ 'email' ]).then((result) => {
            console.log(result);
            resolve(Facebook.login(['email']));
       })
        }
        else {
                console.log("Please run me on a device");
              //  reject('Please run me on a device');
            }
        });
            
            
            /*, (success) => {
                    console.log(JSON.stringify(success));
                    resolve(success);
                },(err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                });*/
            
             
        
        return this.p;
    }
   
    getCurrentUserProfile() {
       
        this.p = new Promise((resolve) => {
            resolve(Facebook.api('me?fields=email,name', null));
            /*(profileData) => {
                console.log(JSON.stringify(profileData));
                resolve(profileData);
            },(err) => {
                console.log(JSON.stringify(err));
                reject(err);
            });*/
        });
        return this.p;
    }
}