import {createAction} from '@reduxjs/toolkit';
import {Element} from './reducers';

// there should be 4 types of actions
// 1. trigger
// 2. started
// 3. finished
// 4. failed
// but for demonstration it is an overcomplication
// also you may use different lib for action/selector/reducer creation
// it should not have impact on result

export const deleteActionTriggered = createAction<{id: number; title: string}>(
  '[TRIGGERED: Delete Action]',
);
export const deleteActionStarted = createAction<number>(
  '[STARTED: Delete Action]',
);

export const undoActionTriggered = createAction<Element>(
  '[TRIGGERED: UnDo Action]',
);
export const undoActionStarted = createAction<Element>(
  '[STARTED: UnDo Action]',
);

export const fetchDeleteTriggered = createAction<number>(
  '[TRIGGERED: Fetch Action]',
);
export const fetchDeleteStarted = createAction<number>(
  '[STARTED: Fetch Action]',
);
