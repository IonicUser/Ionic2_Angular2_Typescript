import { Component } from '@angular/core';

//pages
import { HomePage } from '../Tab1/home/home.page';
import { RoomsPage } from '../Tab2/rooms/rooms.page';
import { ContactPage } from '../Tab3/contact/contact.page';
import { RemotePage } from '../Tab4/remote/remote.page';
import { ProfilePage } from '../Tab5/1profile/profile/profile.page';
@Component({
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RoomsPage;
  tab3Root: any = ContactPage;
  tab4Root: any = RemotePage;
  tab5Root: any = ProfilePage;

  constructor() {

  }

  
}
