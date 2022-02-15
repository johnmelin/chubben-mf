import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const win = window as any;
declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];

if (environment.production) {
  enableProdMode();
}

win.plattform = win.plattform || {};

if (!win.plattform?.[ngVersion]) {
  win.plattform[ngVersion] = platformBrowser();
}

win.plattform[ngVersion]
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
