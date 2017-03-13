import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { authToken } from '../providers/app/authToken/authToken';
import { MyApp } from './app.component';

//providers
import { HttpServ } from '../providers/HttpServ';
import { DataService } from '../providers/DataService';
import { LocalStorageService } from '../providers/LocalStorageService';
import { ToastService } from '../providers/ToastService';
import { Helper } from '../providers/Helper';
import { AlertService } from '../providers/AlertService';

//pipes
import { ActiveCounts } from  '../providers/pipes/ActiveInactiveCount';
import { InactiveCounts } from  '../providers/pipes/ActiveInactiveCount';


//Start Folder
import { SliderPage } from '../pages/Start/slider/slider.page';
import { LoginPage } from '../pages/Start/login/login';
import { SignupPage } from '../pages/Start/signup/signup';
import { ForgotPasswordPage } from '../pages/Start/forgot-password/forgot-password';
import { ForgotPasswordDetailsPage } from '../pages/Start/forgot-password-details/forgot-password-details';

//Tabs launcher
import { TabsPage } from '../pages/tabs/tabs.page';


//Tab1
import { HomePage } from '../pages/Tab1/home/home.page';

//Tab2
import { RoomsPage } from '../pages/Tab2/rooms/rooms.page';
import { SwitchesInRoomPage } from '../pages/Tab2/switches-in-room/switches-in-room';
    




//Tab3
import { ContactPage } from '../pages/Tab3/contact/contact.page';

//Tab4
import { IrListPage } from '../pages/Tab4/ir-list/ir-list';

import { RemoteSelectPage } from '../pages/Tab4/remote-select/remote-select';
import { RemotePage } from '../pages/Tab4/remote/remote.page';

//Tab5
    //profile
    import { ProfilePage } from '../pages/Tab5/1profile/profile/profile.page';
    import { ChangePasswordPage } from '../pages/Tab5/1profile/change-password/change-password';
    import { DisplayProfilePage } from '../pages/Tab5/1profile/display-profile/display-profile';
    import { EditProfilePage } from '../pages/Tab5/1profile/edit-profile/edit-profile';

    //homes
    import { RegisterHomePage } from '../pages/Tab5/2homes/registerhome/registerhome';
    import { CreateHomePage } from '../pages/Tab5/2homes/create-home/create-home';
    import { HomeUsersPage } from '../pages/Tab5/2homes/home-users/home-users';
    import { HomeDetailsPage } from '../pages/Tab5/2homes/home-details/home-details';
    import { EditHomePage } from '../pages/Tab5/2homes/edit-home/edit-home';
    import { PrimeUserDetailsPage } from '../pages/Tab5/2homes/prime-user-details/prime-user-details';
    import { JoinHomeSearchPage } from '../pages/Tab5/2homes/join-home-search/join-home-search';
    import { PendingUserDetailsPage } from '../pages/Tab5/2homes/pending-user-details/pending-user-details';
    import { OtherUserDetailsPage } from '../pages/Tab5/2homes/other-user-details/other-user-details';
    import { DisplayWifiRoutersPage } from '../pages/Tab5/2homes/display-wifi-routers/display-wifi-routers';
    import { CreateWifiRouterPage } from '../pages/Tab5/2homes/create-wifi-router/create-wifi-router';
    import { WifiDetailsPage } from '../pages/Tab5/2homes/wifi-details/wifi-details';
    import { EditWifiRouterPage } from '../pages/Tab5/2homes/edit-wifi-router/edit-wifi-router';

    //rooms
    import { CreateRoomPage } from '../pages/Tab5/3rooms/createroom/createroom';
    import { DisplayRoomsPage } from '../pages/Tab5/3rooms/display-rooms/display-rooms';
    import { RoomDetailsPage } from '../pages/Tab5/3rooms/room-details/room-details';
    import { EditRoomPage } from '../pages/Tab5/3rooms/edit-room/edit-room';

    //sboards
    import { SwitchBoardDisplayPage } from '../pages/Tab5/4sboards/switch-board-display/switch-board-display';
    import { CreatesboardPage } from '../pages/Tab5/4sboards/createsboard/createsboard';
    import { HomeListPage } from '../pages/Tab5/4sboards/home-list/home-list';
    import { SboardListPage } from '../pages/Tab5/4sboards/sboard-list/sboard-list';
    import { RoomListPage } from '../pages/Tab5/4sboards/room-list/room-list';
    import { SwitchBoardEditPage } from '../pages/Tab5/4sboards/edit-switch-board/edit-switch-board';
    import { SwitchBoardConfigPage } from '../pages/Tab5/4sboards/configure-switch-board/config-switch-board'

    //switches
    import { DisplaySwitchesPage } from '../pages/Tab5/5switches/display-switches/display-switches';
    import { CreateSwitchPage } from '../pages/Tab5/5switches/create-switch/create-switch';
    import { SwitchDetailsPage } from '../pages/Tab5/5switches/switch-details/switchDetails';
    import { EditSwitchPage } from   '../pages/Tab5/5switches/edit-switch/edit-switch';

    //irAppliances
    import { DisplayIrAppsPage } from '../pages/Tab5/6irAppliances/display-ir-apps/display-ir-apps';
    import { CreateIrAppPage } from '../pages/Tab5/6irAppliances/create-ir-app/create-ir-app';
    import { ConfigureRemotePage } from  '../pages/Tab5/6irAppliances/configure-remote/configure-remote';
    import { BrandsPage } from '../pages/Tab5/6irAppliances/brands/brands';
    import { SetUpRemotePage } from '../pages/Tab5/6irAppliances/set-up-remote/set-up-remote';


@NgModule({
    declarations: [
        MyApp,
        RoomsPage,
        ContactPage,
        HomePage,
        TabsPage,
        SliderPage,
        LoginPage,
        SignupPage,
        IrListPage,
        BrandsPage,
        RemoteSelectPage,
        RemotePage,
        ProfilePage,
        CreateRoomPage,
        RegisterHomePage,
        HomeDetailsPage,
        HomeUsersPage,
        DisplayRoomsPage,
        SwitchBoardDisplayPage,
        CreatesboardPage,
        DisplaySwitchesPage,
        CreateSwitchPage,
        DisplayProfilePage,
        ChangePasswordPage,
        ForgotPasswordPage,
        ForgotPasswordDetailsPage,
        CreateHomePage,
        EditHomePage,
        PrimeUserDetailsPage,
        JoinHomeSearchPage,
        PendingUserDetailsPage,
        OtherUserDetailsPage,
        DisplayWifiRoutersPage,
        CreateWifiRouterPage,
        EditWifiRouterPage,
        WifiDetailsPage,
        RoomDetailsPage,
        EditRoomPage,
        HomeListPage,
        SboardListPage,
        EditProfilePage,
        RoomListPage,
        SwitchDetailsPage,
        SwitchBoardEditPage,
        SwitchBoardConfigPage,
        EditSwitchPage,
        DisplayIrAppsPage,
        CreateIrAppPage,
        ConfigureRemotePage,
        SetUpRemotePage,
        ActiveCounts,
        InactiveCounts,
        SwitchesInRoomPage        
    ],
    imports: [
        IonicModule.forRoot(MyApp),RoundProgressModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        RoomsPage,
        ContactPage,
        HomePage,
        TabsPage,
        SliderPage,
        LoginPage,
        SignupPage,
        IrListPage,
        BrandsPage,
        RemoteSelectPage,
        RemotePage,
        ProfilePage,
        CreateRoomPage,
        RegisterHomePage,
        HomeDetailsPage,
        HomeUsersPage,
        DisplayRoomsPage,
        SwitchBoardDisplayPage,
        CreatesboardPage,
        DisplaySwitchesPage,
        CreateSwitchPage,
        DisplayProfilePage,
        ChangePasswordPage,
        ForgotPasswordPage,
        ForgotPasswordDetailsPage,
        CreateHomePage,
        EditHomePage,
        PrimeUserDetailsPage,
        JoinHomeSearchPage,
        PendingUserDetailsPage,
        OtherUserDetailsPage,
        DisplayWifiRoutersPage,
        CreateWifiRouterPage,
        WifiDetailsPage,
        EditWifiRouterPage,
        RoomDetailsPage,
        EditRoomPage,
        HomeListPage,
        SboardListPage,
        EditProfilePage,
        RoomListPage,
        SwitchDetailsPage,
        SwitchBoardEditPage,
        SwitchBoardConfigPage,
        EditSwitchPage,
        DisplayIrAppsPage,
        CreateIrAppPage,
        ConfigureRemotePage,
        SetUpRemotePage,
        SwitchesInRoomPage
        
    ],
    providers: [   
                   HttpServ,
                   DataService,
                   LocalStorageService,
                   ToastService,
                   Helper,
                   AlertService
                   
                ],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
