import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskAction from '../../../../redux/task/action';
import TableTaskList from '../TableTaskList';

import 'antd/dist/antd.css';

function TaskList(props) {
  const { tasks, taskAction } = props;

  useEffect(() => {
    taskAction.list();
  }, []);

  return <TableTaskList tasks={tasks} taskAction={taskAction} />;
}

const mapStateToProps = state => ({
  tasks: state.task.get('tasks'),
});

const mapDispatchToProps = dispatch => ({
  taskAction: bindActionCreators(TaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
