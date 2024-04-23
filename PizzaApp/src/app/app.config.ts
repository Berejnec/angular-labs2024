import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {LoggerToken} from "./logger/iLogger";
import {ConsoleLog} from "./logger/console-log";
import {AlertLog} from "./logger/alert-log";
import {ServerLog} from "./logger/server-log";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideHttpClient(),
    {provide: LoggerToken, useClass: ConsoleLog, multi: true},
    {provide: LoggerToken, useClass: AlertLog, multi: true},
    {provide: LoggerToken, useClass: ServerLog, multi: true},
  ]
};
