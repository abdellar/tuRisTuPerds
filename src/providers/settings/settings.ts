import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Settings {

  constructor(public storage: Storage, defaults: any) {
    console.log('Hello SettingsProvider Provider');
  }

}
