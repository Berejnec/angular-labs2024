import {ILogger} from "./iLogger";


export class ConsoleLog implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}
