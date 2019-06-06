/// Generic utility functions

// Shuffle Array
// This creates a deep copy of the array and returns it new
function array_copy_shuffled(array) {
    return array.concat().sort(() => Math.random() - 0.5);
}


// Escape HTML rendering character
function html_get_escaped(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/>/g, '&gt;')
              .replace(/</g, '&lt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;')
              .replace(/`/g, '&#96;');
}