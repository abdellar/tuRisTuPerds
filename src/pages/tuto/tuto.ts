import {Component, ViewChild} from '@angular/core';
import {IonicPage, MenuController, NavController, Platform, Slides} from 'ionic-angular';

import { TranslateService} from "@ngx-translate/core";

export interface Slide{
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tuto',
  templateUrl: 'tuto.html',
})
export class TutoPage {

  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';i
  languages: any[];

  @ViewChild(Slides) slidesView: Slides;

  constructor(
      public navCtrl: NavController,
      public menu: MenuController,
      public translate: TranslateService,
      public platform: Platform){
    this.dir = platform.dir();
    this.languages = [
      {
        language: "Français",
        value: 'fr'
      },
      {
        language: "العربية",
        value: 'ar'
      },
      {
        language: "English (comming soon)",
        value: 'en'
      }
    ];
    this.initSlides();
  }

  nextSlide(){
        this.slidesView.slideTo(1);
  }

  startApp(){
    this.navCtrl.setRoot('HomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutoPage');
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // activer le menu aprés le tuto
    this.menu.enable(true);
  }

  onChange(e) {
    this.translate.use(e);
    this.initSlides();
  }

  initSlides(){
    this.translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('chargement des valeur des slides', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];
      });
  }

}
