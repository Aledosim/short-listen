// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect';
import MockAdapter from 'axios-mock-adapter'
import 'jest-styled-components'

import axios from 'axios'
import chartFixture from './__fixtures__/chartFixture'
import searchFixture from './__fixtures__/searchFixture.json'

var axiosMock = new MockAdapter(axios);
beforeEach(() => {
  axiosMock.reset()
  axiosMock.onGet('chart').reply(200, chartFixture);
  axiosMock.onGet('search').reply(200, searchFixture);
})

global.axios = axiosMock
