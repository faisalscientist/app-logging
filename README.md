# App Logging

app-logging is a javascript log package that helps you write logs in your application. The logs are stored in a storage folder by default in the root of your application.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/app-logging) to install foobar.

```bash
npm install app-logging
```

## Usage

```python
import { Log } from 'app-logging'

const logging = new Log();

# Writing Info Logs
logging.info('info message', 'contextual-data');

# Writing Error Logs
logging.error('error message', 'contextual-data');

# Writing Debug Logs
logging.info('debug message', 'contextual-data');

# Writing Warning Logs
logging.info('warning message', 'contextual-data');

# Writing Critical Logs
logging.info('critical message', 'contextual-data');

# Writing Emergency Logs
logging.info('emergency message', 'contextual-data');

# Writing Notice Logs
logging.info('notice message', 'contextual-data');

# Writing Alert Logs
logging.info('alert message', 'contextual-data');
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://opensource.org/licenses/MIT)
