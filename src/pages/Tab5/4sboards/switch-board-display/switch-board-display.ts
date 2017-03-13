import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';
import { HttpServ } from '../../../../providers/HttpServ';

//pages
import { CreatesboardPage } from '../createsboard/createsboard';
import { DisplaySwitchesPage } from '../../5switches/display-switches/display-switches';
import { CreateRoomPage } from '../../3rooms/createroom/createroom';
import { switchBoardModal } from '../switchBoardModal';
import { SwitchBoardEditPage } from '../../4sboards/edit-switch-board/edit-switch-board';
import { SwitchBoardConfigPage } from '../../4sboards/configure-switch-board/config-switch-board'
@Component({
    selector: 'page-switch-board-display',
    templateUrl: 'switch-board-display.html',
    providers: [HttpServ]
})
export class SwitchBoardDisplayPage {
    public switchboard: any;
    public homeName: string;
    public roomName: string;
    public homeId: string;
    home_id;
    room_id;

    public switchBoardDetailsData: switchBoardModal;

    constructor(public navCtrl: NavController, public navParams: NavParams, private ht: HttpServ) { }

    ionViewDidLoad() {
        // this.switchBoardDetailsData.is_configured = true;
        this.switchboard = this.switchBoardDetailsData = this.navParams.get('switchboard');
        this.homeName = this.navParams.get('homeName');
        this.roomName = this.navParams.get('roomName');
        this.homeId = this.navParams.get('homeId');

        console.log(JSON.stringify(this.switchboard));
        this.switchBoardDetailsData.name = this.switchboard.name;
        this.switchBoardDetailsData.device_type = this.switchboard.device_type;
        this.switchBoardDetailsData.home_type = this.homeName;
        this.switchBoardDetailsData.room_type = this.roomName;
        this.switchBoardDetailsData.device_id = this.switchboard.device_id;
    }

    ngOnInit() {}
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
    //edit switch board 
    public goToEditSwitchBoard() {
        this.navCtrl.push(SwitchBoardEditPage, {
            editSwitchboard: this.switchBoardDetailsData,
            homeName: this.homeName,
            homeId: this.homeId,
            roomName: this.roomName,
            switchBoardId: this.switchBoardDetailsData._id,
            for: this.navParams.get('for')

        });
    }
    //configuring Switch Board
    public configureSwitchBoard() {
        this.navCtrl.push(SwitchBoardConfigPage, {
            editSwitchboard: this.switchBoardDetailsData,
            homeName: this.homeName,
            switchBoardId: this.switchBoardDetailsData._id,
            for: this.navParams.get('for')

        });

    }
    //switch board delete based on Id
    public deleteSwitchBoard() {
        let obj = {
            id: this.switchBoardDetailsData._id
        }
        this.ht.deleteSwitchBoard(obj).subscribe(data => {
            this.navCtrl.pop();
        }, error => {
            this.navCtrl.pop();
            console.log(JSON.stringify(error.json()));
        });
    }

}