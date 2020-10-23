import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import Itineraries from './Itineraries';

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement(<Itineraries />);

    ReactDOM.render(<Itineraries />, div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Itineraries />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});