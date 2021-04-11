import TaskService from './service';
import { ACTIONS, MESSAGES } from './constant';

export function list() {
  return async dispatch => {
    const payload = await TaskService.list();
    dispatch({
      type: ACTIONS.LOAD_TASKS,
      payload,
    });
  };
}

export function create(data) {
  return async dispatch => {
    try {
      const task = await TaskService.create(data);
      dispatch({
        type: ACTIONS.CREATE_TASK,
        payload: { task, message: MESSAGES.CREATED_SUCCESS },
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.CREATE_TASK_FAILED,
        payload: { message: error.message },
      });
    }
  };
}

export function setUpdate(task) {
  return async dispatch => {
    dispatch({
      type: ACTIONS.SET_UPDATE_TASK,
      payload: { task },
    });
  };
}

export function update(data) {
  return async dispatch => {
    try {
      const task = await TaskService.update(data._id, { id: data._id, title: data.title });
      dispatch({
        type: ACTIONS.UPDATE_TASK,
        payload: { task, message: MESSAGES.UPDATED_SUCCESS },
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.UPDATE_TASK_FAILED,
        payload: { message: error.message },
      });
    }
  };
}

export function remove(id) {
  return async dispatch => {
    await TaskService.delete(id);
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: { id, message: MESSAGES.DELETED_SUCCESS },
    });
  };
}
