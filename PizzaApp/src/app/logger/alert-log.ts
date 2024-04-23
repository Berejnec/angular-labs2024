import {ILogger} from "./iLogger";
import {Injectable} from "@angular/core";


@Injectable()
export class AlertLog implements ILogger {
  log(message: string): void {
    alert(message);
  }
}
