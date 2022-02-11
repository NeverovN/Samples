import {Element} from '../redux/reducers';
import {deleteActionTriggered, fetchDeleteTriggered} from '../redux/actions';
import {cancellablePromise} from './cancellablePromise.util';
import React from 'react';
import {Dispatch} from 'redux';

export const useRemovePressHendler =
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
  (el: Element) => {
    dispatch(deleteActionTriggered(el));
    const {promise, cancel} = cancellablePromise(
      new Promise(resolve => setTimeout(() => resolve(el), 4000)),
    );
    const finalPromise = promise.then(
      id => {
        console.log('resolved', id);
        refs.current.shift();
        dispatch(fetchDeleteTriggered(id as number));
      },
      e => console.log(e),
    );
    refs.current.push({promise: finalPromise, cancel, el});
  };
