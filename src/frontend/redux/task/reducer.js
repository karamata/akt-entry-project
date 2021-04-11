import { Map } from 'immutable';
import { ACTIONS } from './constant';

const initialState = Map({
  tasks: [],
  task: {},
  message: null,
  isError: false,
  updatedAt: null,
});

export default function TaskReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTIONS.LOAD_TASKS: {
      const result = state.merge({ ...payload });
      return result;
    }

    case ACTIONS.CREATE_TASK: {
      const { task } = payload;
      const tasks = state.get('tasks');
      const result = state.merge({ tasks: [...tasks, task], isError: false, updatedAt: new Date(), ...payload, task: null });
      return result;
    }

    case ACTIONS.SET_UPDATE_TASK: {
      return state.merge({ ...payload });
    }

    case ACTIONS.UPDATE_TASK: {
      const { task } = payload;
      const tasks = state.get('tasks');
      const newTasks = tasks.map(e => (e._id === task._id ? { ...e, ...task } : e));
      return state.merge({ tasks: newTasks, isError: false, updatedAt: new Date(), ...payload, task: null });
    }

    case ACTIONS.DELETE_TASK: {
      const tasks = state.get('tasks');
      const newTasks = tasks.filter(item => item._id !== payload.id);

      return state.merge({ tasks: newTasks, isError: false, updatedAt: new Date(), ...payload, task: null });
    }

    case ACTIONS.CREATE_TASK_FAILED:
    case ACTIONS.UPDATE_TASK_FAILED: {
      return state.merge({ isError: true, updatedAt: new Date(), ...payload });
    }

    default:
      return state;
  }
}
