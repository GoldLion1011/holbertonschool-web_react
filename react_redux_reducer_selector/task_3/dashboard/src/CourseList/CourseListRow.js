import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Apply the 'rowChecked' style when isChecked changes
    if (isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    // Toggle the isChecked state when the checkbox is clicked
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" className={css(styles.headerRow)}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className="column-headers">
        <th className={css(styles.headerRow)}>{textFirstCell}</th>
        <th className={css(styles.headerRow)}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={css(styles.row, isChecked && styles.rowChecked)}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
