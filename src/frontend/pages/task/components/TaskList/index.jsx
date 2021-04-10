import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Table, Checkbox } from 'antd';

import * as TaskAction from '../../../../redux/task/action';

import 'antd/dist/antd.css';

function TaskList(props) {
  const { tasks, taskAction } = props;

  useEffect(() => {
    taskAction.list();
  }, []);

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
        <div>
          <Button
            type="danger"
            style={{ marginRight: 5 }}
            onClick={() => {
              taskAction.remove(value._id);
            }}
          >
            Delete
          </Button>
          <Button
            color="green-6"
            onClick={() => {
              taskAction.setUpdate(value);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  return <Table rowKey="_id" dataSource={tasks} columns={columns} showHeader={false} pagination={false} />;
}

const mapStateToProps = state => ({
  tasks: state.task.get('tasks'),
});

const mapDispatchToProps = dispatch => ({
  taskAction: bindActionCreators(TaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
