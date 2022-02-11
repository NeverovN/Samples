import {createReducer} from '@reduxjs/toolkit';
import {deleteActionStarted, undoActionStarted} from './actions';

export type Element = {title: string; id: number};

export type InitialState = {
  list: {
    elements: Array<Element>;
  };
};

const initialState: InitialState = {
  list: {
    elements: [
      {title: 'Title 1', id: 1},
      {title: 'Title 2', id: 2},
      {title: 'Title 3', id: 3},
    ],
  },
};

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(deleteActionStarted, (state, payload) => ({
      list: {
        elements: state.list.elements.filter(el => el.id !== payload.payload),
      },
    }))
    .addCase(undoActionStarted, (state, payload) => ({
      list: {
        elements: [...state.list.elements, payload.payload],
      },
    }));
  // there should be other cases
});
