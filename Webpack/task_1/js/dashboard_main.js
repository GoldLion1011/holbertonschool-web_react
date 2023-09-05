// Importing jQuery
import $ from 'jquery';
// Importing debounce from lodash
import { debounce } from 'lodash';

let count = 0; // A variable to keep track of the number of times the button has been clicked

// Function to update the counter
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$(function() {
    // Appending the paragraphs and button to the body
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
    
    // Binding the button's click event to the debounced version of updateCounter
    $('#startBtn').on('click', debounce(updateCounter, 300)); // 300ms debounce time
});
