/// Generic utility functions

// Shuffle Array
// This creates a deep copy of the array and returns it new
function array_copy_shuffled(array) {
    return array.concat().sort(() => Math.random() - 0.5);
}