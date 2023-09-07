import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('Check if getFullYear returns current year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

// Test for getFooterCopy
test('Check if getFooterCopy returns correct string when argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('Check if getFooterCopy returns correct string when argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification
test('Check the returned string of getLatestNotification', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
