// ACTIONS TYPE
export const SAVE_TASK = 'SAVE_TASK';

// ACTION CREATOR
export const saveTask = (task) => ({
  type: SAVE_TASK,
  payload: task,
});
