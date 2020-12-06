# App Logging

app-logging is a javascript log package that helps you write logs in your application. The logs are stored in a storage folder by default in the root of your application.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/app-logging) to install app-logging.

```bash
npm i app-logging
```

## Usage

### Import

```python
const AppLog = require('app-logging').Log;
## Typescript
import { Log } from 'app-logging'

## Initializing
const log = new AppLog();

```

```python
# Writing Info Logs
log.info('info message', 'contextual-data');

# Writing Error Logs
log.error('error message', 'contextual-data');

# Writing Debug Logs
log.debug('debug message', 'contextual-data');

# Writing Warning Logs
log.warning('warning message', 'contextual-data');

# Writing Critical Logs
log. critical('critical message', 'contextual-data');

# Writing Emergency Logs
log.emergency('emergency message', 'contextual-data');

# Writing Notice Logs
log.notice('notice message', 'contextual-data');

# Writing Alert Logs
log.alert('alert message', 'contextual-data');

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://opensource.org/licenses/MIT)
