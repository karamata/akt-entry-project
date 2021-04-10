import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskAction from '../../../../redux/task/action';

function TaskForm(props) {
  const { task, taskAction } = props;
  const initTask = { title: '' };
  const [data, setData] = useState(initTask);

  useEffect(() => {
    setData(task);
  }, [task]);

  const handleChange = e => {
    setData({ ...data, title: e.target.value });
  };

  const onSubmit = () => {
    if (data._id) {
      taskAction.update(data);
    } else {
      taskAction.create(data);
    }
  };

  return (
    <Input
      style={{ margin: '15px 0' }}
      value={data.title}
      name="title"
      onChange={handleChange}
      suffix={
        <Button type="primary" onClick={onSubmit}>
          {data._id ? 'Update' : 'Add'}
        </Button>
      }
    />
  );
}

const mapStateToProps = state => ({
  task: state.task.get('task'),
});

const mapDispatchToProps = dispatch => ({
  taskAction: bindActionCreators(TaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
