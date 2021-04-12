import React from 'react';
import renderer from 'react-test-renderer';

import TableTaskList from './TaskList.component';

jest.mock('antd/dist/antd.css', () => <div />);

it('Create task list component no item', () => {
  const component = renderer.create(<TableTaskList />);
  expect(component).toMatchSnapshot();
});

it('Create task list component has tasks', () => {
  const component = renderer.create(<TableTaskList tasks={[{ _id: '10000', title: 'Do homework' }]} />);
  expect(component).toMatchSnapshot();
});
