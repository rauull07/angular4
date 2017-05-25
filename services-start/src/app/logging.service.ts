import {stat} from 'fs';
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, the new staths: ' + status);
  }
}
