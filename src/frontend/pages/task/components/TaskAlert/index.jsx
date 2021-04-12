import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskAction from '../../../../redux/task/action';
import TaskAlertComponent from './TaskAlert.component';

function TaskAlert(props) {
  const { isError, message, updatedAt } = props;
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setVisible(true);
    window.setTimeout(() => {
      setVisible(false);
    }, 800);
  }, [updatedAt]);

  return <TaskAlertComponent isError={isError} message={message} visible={visible} />;
}

const mapStateToProps = state => ({
  message: state.task.get('message'),
  isError: state.task.get('isError'),
  updatedAt: state.task.get('updatedAt'),
});

const mapDispatchToProps = dispatch => ({
  taskAction: bindActionCreators(TaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskAlert);
