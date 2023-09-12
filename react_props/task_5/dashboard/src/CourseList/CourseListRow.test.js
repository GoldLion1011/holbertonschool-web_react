import React from "react";
import { render } from 'enzyme';
import CourseListRow from "./CourseListRow";


describe("<CourseListRow />", () => {

  // Tests that when isHeader is true component renders one cell
  // with colspan = 2 when textSecondCell does not exist
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = render(<CourseListRow isHeader={true} textFirstCell="First" />);
    expect(wrapper.find('th[colSpan="2"]').length).toEqual(1);
  }
  );
  // Tests that when isHeader is true component renders two cells
  // when textSecondCell exists
  it("renders two cells when textSecondCell exists", () => {
    const wrapper = render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    expect(wrapper.find('th[colSpan="2"]').length).toEqual(0);
    expect(wrapper.find('th').length).toEqual(2);
  }
  );

  // Tests that when isHeader is false component renders two td elements within tr element
  it("renders two td elements within tr element", () => {
    const wrapper = render(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    expect(wrapper.find('tr').length).toEqual(1);
    expect(wrapper.find('td').length).toEqual(2);
  }
  );
});
