import * as fs from 'fs';

const storagePath = process.env.PWD + '/storage';
export default class Log {
  public info = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'INFO');
  }
  public error = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'ERROR');
  }
  public debug = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'DEBUG');
  }
  public critical = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'CRITICAL');
  }
  public emergency = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'EMERGENCY');
  }
  public alert = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'ALERT');
  }
  public notice = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'NOTICE');
  }
  public warning = (message: string, contextualData: any, async: boolean = false) => {
    this.executeLogs(message, contextualData, async, 'WARNING');
  }


    private executeLogs = (message: string, contextualData: any, async: boolean = false, type: string) => {
    var date = new Date();
    var logDate = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
    
    if(async){
      fs.readFile(`${storagePath}/app.log`, 'utf8', (error, read) => {
        const newLog = `${read !== '' ? `${read}\n` : read}[${logDate}] ${process.env.NODE_ENV || 'local'}.${type}: ${message ? message : ''} ${contextualData ? (typeof contextualData === 'object' && contextualData !== null ? JSON.stringify(contextualData) : contextualData) : ''}`;
        fs.writeFile(`${storagePath}/app.log`, newLog, ()=>{});
      })
    } else {
      if(!fs.existsSync(storagePath)){
        fs.mkdirSync(storagePath)
        fs.openSync(`${storagePath}/app.log`, 'w');
      } else {
        if(!fs.existsSync(`${storagePath}/app.log`)){
          fs.openSync(`${storagePath}/app.log`, 'w');
        }
      }
      const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8');
      const newLog = `${data !== '' ? `${data}\n` : data}[${logDate}] ${process.env.NODE_ENV || 'local'}.${type}: ${message ? message : ''} ${contextualData ? (typeof contextualData === 'object' && contextualData !== null ? JSON.stringify(contextualData) : contextualData) : ''}`
      fs.writeFileSync(`${storagePath}/app.log`, newLog);
    }
  }
}