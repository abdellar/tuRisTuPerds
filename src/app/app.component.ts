import {Component, ViewChild} from '@angular/core';
import {Config, Nav, Platform} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from "../pages/pages";
import { Settings } from "../providers/providers";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = IntroPage;

  @ViewChild(Nav) nav : Nav;

  pages: any[] = [
    {title: 'Tutorial', component: 'TutoPage'},
    {title: 'Home', component: 'HomePage'}
  ]

  constructor(
      platform: Platform,
      settings: Settings,
      private translate: TranslateService,
      private config: Config,
      private statusBar: StatusBar,
      private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate(){
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('fr');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      this.translate.use('fr');
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

  }

  openPage(page){
    this.nav.setRoot(page.component)
  }

}

