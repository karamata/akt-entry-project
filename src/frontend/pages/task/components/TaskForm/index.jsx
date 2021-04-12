import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskAction from '../../../../redux/task/action';
import TaskFormComponent from './TaskForm.component';

function TaskForm(props) {
  const { task, taskAction } = props;
  return <TaskFormComponent task={task} taskAction={taskAction} />;
}

const mapStateToProps = state => ({
  task: state.task.get('task'),
});

const mapDispatchToProps = dispatch => ({
  taskAction: bindActionCreators(TaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
