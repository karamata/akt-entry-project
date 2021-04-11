import ApiClient from '../../api';

const TaskService = {
  list: async () => {
    const result = await ApiClient.get('/api/tasks');
    return result;
  },
  create: async data => {
    const result = await ApiClient.post('/api/tasks', { data });
    return result;
  },
  update: async (id, data) => {
    const result = await ApiClient.put(`/api/tasks/${id}`, { data });
    return result;
  },
  delete: async id => {
    const result = await ApiClient.delete(`/api/tasks/${id}`);
    return result;
  },
};

export default TaskService;
