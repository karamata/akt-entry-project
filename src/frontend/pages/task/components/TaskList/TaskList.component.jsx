import React from 'react';
import { Button, Table, Checkbox, Popconfirm } from 'antd';

import 'antd/dist/antd.css';

function TableTaskList(props) {
  const { tasks, taskAction } = props;

  function confirm(value) {
    taskAction.remove(value._id);
  }

  const ButtonDeleteTask = value => (
    <Popconfirm title="Are you sure to delete this task?" onConfirm={() => confirm(value)} okText="Yes" cancelText="No">
      <Button type="danger" style={{ marginRight: 5 }}>
        Delete
      </Button>
    </Popconfirm>
  );

  const ButtonSetUpdateTask = value => (
    <Button
      style={{ color: '#fff', backgroundColor: '#28A745' }}
      onClick={() => {
        taskAction.setUpdate(value);
      }}
    >
      Edit
    </Button>
  );

  const columns = [
    {
      title: '',
      key: 'title',
      width: '80%',
      render: value => (
        <div>
          <Checkbox /> {value.title}
        </div>
      ),
    },
    {
      title: '',
      key: 'options',
      render: value => (
        <>
          {ButtonDeleteTask(value)}
          {ButtonSetUpdateTask(value)}
        </>
      ),
    },
  ];

  return <Table rowKey="_id" dataSource={tasks} columns={columns} showHeader={false} pagination={false} />;
}

export default TableTaskList;
