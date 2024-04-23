import {InjectionToken} from "@angular/core";


export interface ILogger {
  log(message: string): void;
}


export const LoggerToken = new InjectionToken<ILogger>('LoggerToken');
