import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutoPage } from './tuto';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {createTranslateLoader} from "../../app/app.module";

@NgModule({
  declarations: [
    TutoPage,
  ],
  imports: [
    IonicPageModule.forChild(TutoPage),
    TranslateModule.forChild(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      })
  ],
  exports : [
    TutoPage
  ]
})
export class TutoPageModule {}
