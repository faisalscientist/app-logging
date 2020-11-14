import { Log } from '../src/index';
import { expect } from 'chai';
import * as fs from 'fs';


const storagePath = process.env.PWD + '/storage';
describe('App Logging Test', () => {
  beforeEach(function() {
    // Remove storage folder
    if(fs.existsSync(storagePath))
      removeDir(storagePath);
  });
  it('should save info log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.info('info log message', 'info log contextualData');
    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.INFO: info log message info log contextualData')).to.be.true;
  });
  it('should save error log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.error('error log message', 'error log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.ERROR: error log message error log contextualData')).to.be.true;
  });
  it('should save warning log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.warning('warning log message', 'warning log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.WARNING: warning log message warning log contextualData')).to.be.true;
  });
  it('should save alert log in /storage/app.log file', () => {
    // Write log
    
    const logging = new Log();
    logging.alert('alert log message', 'alert log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.ALERT: alert log message alert log contextualData')).to.be.true;
  });
  it('should save notice log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.notice('notice log message', 'notice log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.NOTICE: notice log message notice log contextualData')).to.be.true;
  });
  it('should save debug log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.debug('debug log message', 'debug log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.DEBUG: debug log message debug log contextualData')).to.be.true;
  });
  it('should save emergency log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.emergency('emergency log message', 'emergency log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.EMERGENCY: emergency log message emergency log contextualData')).to.be.true;
  });
  it('should save critical log in /storage/app.log file', () => {
    // Write log
    const logging = new Log();
    logging.critical('critical log message', 'critical log contextualData');

    // Read Log File
    const data = fs.readFileSync(`${storagePath}/app.log`, 'utf8'); 
    expect(data.includes('.CRITICAL: critical log message critical log contextualData')).to.be.true;
  });
  
  afterEach(function(){
    // Remove storage folder
    if(fs.existsSync(storagePath))
      removeDir(storagePath);
  })
});

const removeDir = (path: string) => {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)
    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename)
        } else {
          fs.unlinkSync(path + "/" + filename)
        }
      })
      fs.rmdirSync(path)
    } else {
      fs.rmdirSync(path)
    }
  }
}