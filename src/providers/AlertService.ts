import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";


@Injectable()
export class AlertService{

        constructor(private alertCtrl:AlertController){

        }
showAlert(title:string,message:string){

         let alert = this.alertCtrl.create({
          title: title,
          message: message,
          buttons: [
            {
              text: 'Okay'
          }]

       });
       alert.present();
}

showConfirm(title:string,message:string,cancelText,okText,cancelCallBack,okCallBack){
        let confirm = this.alertCtrl.create({
          title: title,
          message: message,
          buttons: [
            {
              text: cancelText,
              handler: ()=> cancelCallBack()
            },
            {
              text: okText,
              handler:() =>  okCallBack()
            }]
        });
        confirm.present();
}

}