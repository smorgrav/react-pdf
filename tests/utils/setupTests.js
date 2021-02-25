/* eslint-disable */
import './polyfills';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
global.BROWSER = false;
global.fetch = require('jest-fetch-mock');
