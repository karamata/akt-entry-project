import ApiClient from '../../api';

const TaskService = {
  list: async () => {
    return await ApiClient.get('/api/tasks');
  },
  create: async data => {
    return await ApiClient.post('/api/tasks', { data });
  },
  update: async (id, data) => {
    return await ApiClient.put(`/api/tasks/${id}`, { data });
  },
  delete: async id => {
    return await ApiClient.delete(`/api/tasks/${id}`);
  },
};

export default TaskService;
