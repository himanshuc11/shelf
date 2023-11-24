/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('tab bar focusses correctly', () => {
  const app = renderer.create(<App />);
  const chartButton = app.root.findByProps({testID: 'Chart'});
  const homeButton = app.root.findByProps({testID: 'Home'});

  expect(homeButton.props.accessibilityState.selected).toBe(true);
  act(() => {
    chartButton.props.onPress();
  });
  expect(chartButton.props.accessibilityState.selected).toBe(true);
  expect(homeButton.props.accessibilityState.selected).toBe(undefined);
});
