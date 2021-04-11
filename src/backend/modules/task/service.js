import TaskModel from './model';

const TaskService = {
  list: async () => {
    const tasks = await TaskModel.find({});
    return tasks;
  },
  create: async data => {
    if (!data.title) {
      throw Object({ message: 'Title required', status: 400 });
    }
    const task = await TaskModel.create(data);
    return task;
  },
  update: async (id, data) => {
    if (data.id !== id) {
      throw Object({ message: 'Bad request', status: 400 });
    }
    if (!data.title) {
      throw Object({ message: 'Title required', status: 400 });
    }

    const task = await TaskModel.findByIdAndUpdate(id, { ...data, updatedAt: new Date() }, { lean: true, new: true });
    return task;
  },
  delete: async id => {
    const task = await TaskModel.findOne({ _id: id });
    if (!task) {
      throw Object({ message: 'Task is not exist', status: 400 });
    }
    const result = await TaskModel.remove({ _id: id });
    return result;
  },
};

export default TaskService;
