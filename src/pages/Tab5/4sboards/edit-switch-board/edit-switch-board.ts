import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { CreatesboardPage } from '../createsboard/createsboard';
import { DisplaySwitchesPage } from '../../5switches/display-switches/display-switches';
import { CreateRoomPage } from '../../3rooms/createroom/createroom';
import { switchBoardModal } from '../switchBoardModal';
import { SwitchBoardDisplayPage } from '../../4sboards/switch-board-display/switch-board-display';
//providers
import { DataService } from '../../../../providers/DataService';

@Component({
    selector: 'page-switch-board-edit',
    templateUrl: 'edit-switch-board.html',
    providers: [HttpServ]
})
export class SwitchBoardEditPage {
    public switchboard: any;
    public homeName: string;
    public switchBoardId: string;
    public roomName: string;
    public roomArrayData: [{ room_name: '', room_id: '' }];
    home_id;
    room_id;
    public switchBoardDetailsData: switchBoardModal;

    constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ, public ds: DataService) {
        this.getRoomsList(this.navParams.get('homeId'))

    }

    ngOnInit() {
        this.switchBoardDetailsData = this.switchboard = this.navParams.get('editSwitchboard');
        this.homeName = this.navParams.get('homeName');
        this.switchBoardId = this.navParams.get('switchBoardId');
        this.roomName = this.navParams.get('roomName');
        this.switchBoardDetailsData.name = this.switchboard.name;
        this.switchBoardDetailsData.device_type = this.switchboard.device_type;
        this.switchBoardDetailsData.home_type = this.homeName;
        //  this.switchBoardDetailsData.room_type = this.roomName;
        this.switchBoardDetailsData.device_id = this.switchboard.device_id;

    }

    public getRoomsList(id: any) {
        this.ds.getHomesRooms(id,
            (data) => {
                this.roomArrayData = data.rooms;
            },
            (error) => {
                console.log(JSON.stringify(error.json()));

            });
    }


    public updateSwitchBoard(item: any) {
        let obj = {
            "id": this.switchBoardId,
            "sboard_name": this.switchBoardDetailsData.name,
            "display_color": "584e4757ae82ee51fc44a0ca"
        }

        this.switchBoardDetailsData.name = this.switchBoardDetailsData.name;

        console.log(JSON.stringify(item))
        this.ht.updateSwitchBoard(obj).subscribe(data => {
            this.navCtrl.pop();
            //  this.navCtrl.push(TabsPage);
        }, error => {
            // this.navCtrl.pop();
            console.log(JSON.stringify(error.json()));
        });
    }



    addSwitchBoard() {
        this.navCtrl.push(CreatesboardPage, {
            room: this.room_id,
            home: this.home_id,
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        event.complete();
        console.log(event);
    }
    goToSwitches(item) {
        this.navCtrl.push(DisplaySwitchesPage, {
            sboard_id: item._id
        });
    }

}
