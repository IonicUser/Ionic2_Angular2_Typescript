import { Component,ViewChild } from '@angular/core';
import {NavController,MenuController,Slides} from 'ionic-angular';

//page
import { TabsPage } from '../../tabs/tabs.page';
import {LoginPage} from '../login/login';

@Component({
  selector: 'ib-page-slider',  
  templateUrl: 'slider.page.html'
})
export class SliderPage {
 showSkip = true;
 // @ViewChild('mySlider') slider: Slides;
  constructor(public navCtrl: NavController,public menu: MenuController) {}

  /*goToSlide() {
    this.slider.slideTo(3, 100);
  }

  onSlideChanged() {
    // let currentIndex = this.slider.getPreviousIndex();
    console.log("Current index is");
  }*/

  goToLogin() {
      this.navCtrl.pop();
    this.navCtrl.push(LoginPage);
    
  }
  startApp() {
    this.navCtrl.push(LoginPage).then(() => {
      localStorage.setItem('hasSeenTutorial', 'true');
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}