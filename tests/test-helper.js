import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { mocha } from 'mocha';

mocha.setup({
  timeout: 10000,
  slow: 5000
});
setApplication(Application.create(config.APP));
