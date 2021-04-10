import React from 'react';
import { Alert } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskAction from '../../../../redux/task/action';

function TaskAlert(props) {
  const { isError, message } = props;

  return (
    <>
      {message && (
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
});

const mapDispatchToProps = dispatch => ({
  taskAction: bindActionCreators(TaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskAlert);
