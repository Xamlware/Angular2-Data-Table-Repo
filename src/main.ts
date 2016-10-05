// /// <reference path="../typings/globals/es6-collections/index.d.ts" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { environment } from './app/';
import {AppModule} from './app/app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule,[]);