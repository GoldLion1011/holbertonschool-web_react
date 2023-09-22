import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const CourseList = ({ listCourses = [] }) => {
  return (
      <table id="CourseList" className={css(styles.table)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          ) : (
            listCourses.map((course) => (
              <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={String(course.credit)} isHeader={false} />
            ))
          )}
        </tbody>
      </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

const styles = StyleSheet.create({
  th: {
    borderBottom: '2px solid',
    borderCollapse: 'collapse',
    borderColor: 'lightgray',
  },
  
  table: {
    borderBottom: '2px solid',
    borderCollapse: 'collapse',
    width: '90%',
    border: '1px solid',
    borderColor: 'lightgray',
    margin: '30px auto 30px auto',
  },
  
  columnHeaders: {
    textAlign: 'left',
  },
});

export default CourseList;
