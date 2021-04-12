import React from 'react';
import renderer from 'react-test-renderer';

import TaskAlertComponent from './TaskAlert.component';

jest.mock('antd/dist/antd.css', () => <div />);

it('Alert success when showed', () => {
  const component = renderer.create(<TaskAlertComponent isError={false} message={'Entity created'} visible={true} />);
  expect(component).toMatchSnapshot();
});

it('Alert failed when showed', () => {
  const component = renderer.create(<TaskAlertComponent isError={true} message={'Title required'} visible={true} />);
  expect(component).toMatchSnapshot();
});
