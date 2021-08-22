import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

function testRender() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

it('renders without crashing', async () => {
  const tree = testRender()

  expect(tree).toMatchSnapshot()
})
