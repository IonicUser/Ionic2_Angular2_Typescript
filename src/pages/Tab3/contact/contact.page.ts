import { Component } from '@angular/core';
import { NavController,reorderArray,Platform } from 'ionic-angular';
declare var cordova;
@Component({
  selector: 'ib-page-contact',
  templateUrl: 'contact.page.html'
})

export class ContactPage {
  constructor(public navCtrl: NavController,private platform:Platform) { 
          this.platform=platform;
   }
   ionViewDidLoad(){
     this.platform.ready().then(() => {

        // Now i'll play my ghame here
      var zeroconf = cordova.plugins.zeroconf;
      zeroconf.getHostname(function success(hostname){
          console.log(hostname); // ipad-of-becvert.local.
      });
      zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
          'foo' : 'bar'
      }, function success(result){
          var action = result.action; // 'registered'
          var service = result.service;
      });
      zeroconf.watch('_http._tcp.', 'local.', function(result) {
        var action = result.action;
        var service = result.service;
        /* service : {
            'domain' : 'local.',
            'type' : '_http._tcp.',
            'name': 'Becvert\'s iPad',
            'port' : 80,
            'hostname' : 'ipad-of-becvert.local',
            'ipv4Addresses' : [ '192.168.1.125' ], 
            'ipv6Addresses' : [ '2001:0:5ef5:79fb:10cb:1dbf:3f57:feb0' ],
            'txtRecord' : {
                'foo' : 'bar'
            }
        } */
        if (action == 'added') {
            console.log('service added', service);
            alert("Service added");
        } else {
            console.log('service removed', service);
            alert("service removed");
        }
        });
     });

     

}
}
