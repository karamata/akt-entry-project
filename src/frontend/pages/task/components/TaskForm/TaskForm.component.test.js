import React from 'react';
import renderer from 'react-test-renderer';

import TaskFormComponent from './TaskForm.component';

jest.mock('antd/dist/antd.css', () => <div />);

it('Create form submit a task', () => {
  const component = renderer.create(<TaskFormComponent />);
  expect(component).toMatchSnapshot();
});
