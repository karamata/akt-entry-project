import TaskService from './service';

const TaskController = {
  list: (req, res, next) => {
    TaskService.list()
      .then(tasks => res.json({ tasks }))
      .catch(err => next(err));
  },
  create: async (req, res, next) => {
    const data = {
      title: req.body.title,
    };
    TaskService.create(data)
      .then(task => res.json(task))
      .catch(err => next(err));
  },
  update: (req, res, next) => {
    const id = req.params.id;
    const data = {
      id: req.body.id,
      title: req.body.title,
    };
    TaskService.update(id, data)
      .then(task => res.json(task))
      .catch(err => next(err));
  },
  delete: (req, res, next) => {
    const id = req.params.id;
    TaskService.delete(id)
      .then(result => res.json(result))
      .catch(err => next(err));
  },
};

export default TaskController;
