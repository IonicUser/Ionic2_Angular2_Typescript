import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService{
        constructor(private tc:ToastController){}

        topToast_Long(msg:string){
            let toast = this.tc.create({
                   message: msg,
                   duration: 2500,
                   position : 'top'
                        });
             toast.present();
        }
         topToast_Short(msg:string){
            let toast = this.tc.create({
                   message: msg,
                   duration: 1500,
                   position: 'top'
                        });
             toast.present();
        }
        bottomToast_Long(msg:string){
            let toast = this.tc.create({
                   message: msg,
                   duration: 2500
                        });
             toast.present();
        }
         bottomToast_Short(msg:string){
            let toast = this.tc.create({
                   message: msg,
                   duration: 1500
                        });
             toast.present();
        }

}