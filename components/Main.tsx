import React, {useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//redux
import {elementsSelector} from '../redux/selectors';
import {Element} from '../redux/reducers';

// styles
import {styles} from './styles';
import {useUndoPressHandler} from '../utils/useUndoPressHandler.utils';
import {useRemovePressHendler} from '../utils/useRemovePressHandler.utils';

const Button: React.FC<{undoPressHandler: () => void}> = ({
  undoPressHandler,
}) => {
  return (
    <TouchableOpacity onPress={undoPressHandler} style={styles.buttonWrapper}>
      <Text>Press to undo</Text>
    </TouchableOpacity>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Press at element to remove it from screen
      </Text>
    </View>
  );
};

const Item: React.FC<{
  el: Element;
  removePressHandler: (el: Element) => void;
}> = ({el, removePressHandler}) => {
  return (
    <TouchableOpacity
      key={el.id.toString()}
      onPress={removePressHandler.bind(null, el)}
      style={styles.item}>
      <Text>
        {el.id}:{'\t'}
      </Text>
      <Text>{el.title}</Text>
    </TouchableOpacity>
  );
};

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const elements = useSelector(elementsSelector);
  const itemsRef = useRef<
    {
      promise: Promise<any>;
      cancel: () => void;
      el: Element;
    }[]
  >([]);

  const undoPressHandler = useUndoPressHandler(itemsRef, dispatch);
  const removePressHandler = useRemovePressHendler(itemsRef, dispatch);

  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.list}>
        {elements.map(el => {
          return <Item el={el} removePressHandler={removePressHandler} />;
        })}
      </View>
      <Button undoPressHandler={undoPressHandler} />
    </View>
  );
};
