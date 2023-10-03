import { Actions } from './courseActionTypes';

// Default state: an empty array
const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_COURSE_SUCCESS:
      // Map over the courses and set isSelected to false for each
      const coursesWithSelection = action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
      return coursesWithSelection;

    case Actions.SELECT_COURSE:
      // Update the isSelected property for the selected course
      return state.map((course, index) => {
        if (index === action.index) {
          return {
            ...course,
            isSelected: true,
          };
        }
        return course;
      });

    case Actions.UNSELECT_COURSE:
      // Update the isSelected property to false for the unselected course
      return state.map((course, index) => {
        if (index === action.index) {
          return {
            ...course,
            isSelected: false,
          };
        }
        return course;
      });

    default:
      return state;
  }
};

export default courseReducer;
