import TaskController from '../modules/task/controller';

const routes = ({ app }) => {
  app.get('/api/tasks', TaskController.list);
  app.post('/api/tasks', TaskController.create);
  app.put('/api/tasks/:id', TaskController.update);
  app.delete('/api/tasks/:id', TaskController.delete);
};

export default routes;
