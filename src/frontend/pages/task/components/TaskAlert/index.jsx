import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskAction from '../../../../redux/task/action';

function TaskAlert(props) {
  const { isError, message, updatedAt } = props;
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setVisible(true);
    window.setTimeout(() => {
      setVisible(false);
    }, 800);
  }, [updatedAt]);

  return (
    <>
      {visible && message && (
        <Alert
          message={
            <span>
              <b>{isError ? 'Error!' : 'Success!'}</b> {message}
            </span>
          }
          type={isError ? 'error' : 'success'}
        />
      )}
    </>
  );
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
