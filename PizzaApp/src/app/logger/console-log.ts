import {ILogger} from "./iLogger";
import {Injectable} from "@angular/core";

@Injectable()

export class ConsoleLog implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}
