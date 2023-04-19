import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import renderer from 'react-test-renderer';
import citiesReducer from '../redux/cities/citiesSlice';
import Card from '../pages/card';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

describe('Card', () => {
  test('Card component', async () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Card city="kigali" />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
