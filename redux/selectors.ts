import {createSelector} from 'reselect';
import {InitialState} from './reducers';

const rootSelector = (state: InitialState) => state;

export const listSelector = createSelector(rootSelector, state => state.list);
export const elementsSelector = createSelector(
  listSelector,
  list => list.elements,
);
