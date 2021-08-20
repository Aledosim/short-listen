// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import chartFixture from './__fixtures__/chartFixture'

var axiosMock = new MockAdapter(axios);
const data = chartFixture
axiosMock.onGet('chart').reply(200, data);

global.axios = axiosMock
