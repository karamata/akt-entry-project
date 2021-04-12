import React from 'react';
import { Alert } from 'antd';

function TaskAlertComponent(props) {
  const { isError, message, visible } = props;

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

export default TaskAlertComponent;
