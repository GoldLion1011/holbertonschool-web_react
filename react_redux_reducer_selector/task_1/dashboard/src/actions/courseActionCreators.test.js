import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('Test suite for courseActionCreators', () => {
  it('tests selectCourse returns correct object', () => {
    const result = selectCourse(1);
    expect(result).toEqual({type: 'SELECT_COURSE', payload: 1});
  }
  );
  it('tests unSelectCourse returns correct object', () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({type: 'UNSELECT_COURSE', payload: 1});
  }
  );
}
);
