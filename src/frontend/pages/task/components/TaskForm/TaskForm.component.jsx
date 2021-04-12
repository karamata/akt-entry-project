import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';

function TaskFormComponent(props) {
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
    if (data?._id) {
      taskAction.update(data);
    } else {
      taskAction.create(data);
    }
  };

  const onClear = () => {
    taskAction.setUpdate(null);
  };

  const renderButtonAdd = value => {
    return (
      <Button type="primary" onClick={onSubmit}>
        {value?._id ? 'Update' : 'Add'}
      </Button>
    );
  };

  const renderButtonClear = () => {
    return (
      <Button type="danger" onClick={onClear}>
        Clear
      </Button>
    );
  };

  return (
    <Input
      style={{ margin: '15px 0' }}
      value={data?.title}
      name="title"
      onChange={handleChange}
      suffix={
        <>
          {renderButtonAdd(data)}
          {data?._id && renderButtonClear()}
        </>
      }
    />
  );
}

export default TaskFormComponent;
