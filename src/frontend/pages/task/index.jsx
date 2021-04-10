import React from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskAlert from './components/TaskAlert';

import 'antd/dist/antd.css';

function Task() {
  return (
    <>
      <TaskAlert />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default Task;
