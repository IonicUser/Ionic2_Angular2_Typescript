import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,reorderArray  } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { CreatesboardPage } from '../createsboard/createsboard';
import { DisplaySwitchesPage } from '../../5switches/display-switches/display-switches';
import { CreateRoomPage } from '../../3rooms/createroom/createroom';
import { switchBoardModal } from '../switchBoardModal';

@Component({
  selector: 'page-switch-board-config',
  templateUrl: 'config-switch-board.html',
  providers : [HttpServ]
})
export class SwitchBoardConfigPage {
    public switchboard:any;
    public homeName:string;
    public switchBoardId:string;
    home_id;
    room_id;
    public switchBoardDetailsData=new switchBoardModal();

  constructor(public navCtrl: NavController, public navParams: NavParams,private ht:HttpServ) {}

  ngOnInit() {
     this.switchBoardDetailsData.is_configured=true;
    this.switchboard = this.navParams.get('editSwitchboard'); 
    this.homeName = this.navParams.get('homeName'); 
    this.switchBoardId= this.navParams.get('switchBoardId');
       
    console.log(JSON.stringify(this.switchboard));
    this.switchBoardDetailsData.name=this.switchboard.name;
     this.switchBoardDetailsData.device_type=this.switchboard.device_type;
      this.switchBoardDetailsData.home_type=this.homeName;
       this.switchBoardDetailsData.room_type='Room Name';
       this.switchBoardDetailsData.device_id=this.switchboard.device_id;

  }
  
public updateSwitchBoard(item:any){
     let obj = {
      "id": this.switchBoardId,
      "sboard_name": this.switchBoardDetailsData.name,
      "display_color": "584e4757ae82ee51fc44a0ca"
    }
console.log(JSON.stringify(item))
this.ht.updateSwitchBoard(obj).subscribe(data => {
      //  alert(JSON.stringify(data))
      //  this.data = data;      
      this.navCtrl.pop();
      //  this.navCtrl.push(TabsPage);
    }, error => {
      this.navCtrl.pop();
      console.log(JSON.stringify(error.json()));
    });
}



}
