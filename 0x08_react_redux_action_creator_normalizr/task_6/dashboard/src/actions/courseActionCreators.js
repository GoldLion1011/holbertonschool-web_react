import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    payload: index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    payload: index,
  };
};

const boundActionCreators = bindActionCreators(
  {
    selectCourse,
    unSelectCourse,
  },
  useDispatch()
);

export const courseActions = {
  ...boundActionCreators,
};
