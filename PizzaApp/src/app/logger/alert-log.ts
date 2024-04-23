import {ILogger} from "./iLogger";


export class AlertLog implements ILogger {
  log(message: string): void {
    alert(message);
  }
}
