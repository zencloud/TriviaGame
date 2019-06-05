/// Core Functions



// Game Round Control ---------------------------------

// Start New Game
function game_new_game () {

    // Show major content
    ui_show_element("container-time-remaining");
    ui_show_element("container-question");
    ui_show_element("container-answers");
    //ui_show_element("container-message-hud");

    // Hide Welcome Content
    ui_hide_element("btn-game-start");
    ui_hide_element("container-welcome");

}

// Get Question
function get_question(questionIndex) {
    return questionLibrary[questionIndex].Q;
}

// Get Question Answer from Array. 0 is always answer.
function get_question_answer(questionIndex, answerIndex) { 

    return questionLibrary[questionIndex].A[answerIndex];

}


// UI --------------------------------------------------

// Show Element
function ui_show_element(element) {
    
    // Get element and show
    document.getElementById(element).style.display = '';
    document.getElementById(element).classList.add("animate-swing-in");

}

// Hide Element
function ui_hide_element(element) {

    // Get element and hide
    document.getElementById(element).style.display = 'none';
}