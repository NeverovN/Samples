import {Element} from '../redux/reducers';
import {undoActionTriggered} from '../redux/actions';
import {Dispatch} from 'redux';
import React from 'react';

export const useUndoPressHandler =
  (
    refs: React.MutableRefObject<
      Array<{
        promise: Promise<any>;
        cancel: () => void;
        el: Element;
      }>
    >,
    dispatch: Dispatch<any>,
  ) =>
  () => {
    if (!refs.current.length) {
      console.log('empty arr');
      return;
    }
    const {cancel, el} = refs.current[0];
    cancel();

    refs.current = refs.current.filter((_, i) => i !== 0);
    dispatch(undoActionTriggered(el));
  };
