import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomePage;
  pages: Array<(title: string, component: any)>;

  constructor(platform: Platform) {
    platform.ready().then(() => {});

    this.pages = [
      (title: 'Page1', component: HomePage)
      (title: 'Page2', component: AboutPage)
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
