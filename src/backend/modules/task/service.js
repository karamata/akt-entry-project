import TaskModel from './model';

const TaskService = {
  list: async () => {
    const tasks = await TaskModel.find({});
    return tasks;
  },
  create: async data => {
    const task = await TaskModel.create(data);
    return task;
  },
  update: async (id, data) => {
    const task = await TaskModel.findByIdAndUpdate(id, data, { lean: true, new: true });
    return task;
  },
  delete: async id => {
    const result = await TaskModel.remove({ _id: id });
    return result;
  },
};

export default TaskService;
