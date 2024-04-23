import {ILogger} from "./iLogger";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";


export class ServerLog implements ILogger {

  private httpClient = inject(HttpClient);
  log(message: string): void {
     this.httpClient.post('http://localhost:3000/log', {message: message}).subscribe();
  }
}
