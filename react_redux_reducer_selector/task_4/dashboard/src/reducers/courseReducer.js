import { Actions } from './courseActionTypes';
import { Map, List } from 'immutable';
import coursesNormalizer from './coursesNormalizer';
import { Actions } from './courseActionTypes';

// Default state: an empty Map
const initialState = Map({
  courses: List(),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_COURSE_SUCCESS:
      // Normalize the data and merge it with the state
      return state.set('courses', List(coursesNormalizer(action.data).result));

    case Actions.SELECT_COURSE:
      // Update isSelected property for the selected course using setIn
      return state.setIn(['courses', action.index, 'isSelected'], true);

    case Actions.UNSELECT_COURSE:
      // Update isSelected property for the unselected course using setIn
      return state.setIn(['courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
