/// Core Functions

// Game Round Control ---------------------------------

// Start New Game
function app_new_game () {

    // Generate Question
    app_load_question(appData.questionID);

    // Show major content
    ui_show_element("container-time-remaining");

    // Animation Delays for initialization of new game
    // Delay Container Question
    setTimeout(() => {
        ui_show_element("container-question");
    }, 300);

    // Delay Container Answers
    setTimeout(() => {
        ui_show_element("container-answers");
    }, 400);

    // Begin Timer
    let timerIndex = setInterval(() => {
        appData.timeSecLeft--;
        document.getElementById("time-display").innerText = appData.timeSecLeft + 's';

        // Check timeout
        if (appData.timeSecLeft === 0) {
            clearInterval(timerIndex);
        }

    }, 1000);

    // Set Timer End

    // Hide Welcome Content
    ui_hide_element("btn-game-start");
    ui_hide_element("container-welcome");
    //document.getElementById("btn-game-start").classList.add("animate-slide-out");
    //document.getElementById("container-welcome").classList.add("animate-slide-out")
}


// Load question chosen
function app_load_question(questionIndex) {

    // Update Question Display
    document.getElementById("question-display").innerText = get_question(questionIndex);
    
    // Loop through an append 4 questions in random order
    let answerArray = array_copy_shuffled(get_question_answer_array(appData.questionID));
    let answerDiv   = document.getElementById("container-answers");
    answerDiv.innerHTML = '';
    answerArray.forEach(function(value, index) {

        let aIndex     = get_question_answer_array(appData.questionID).indexOf(value);      // Get answer array index
        let newValue   = html_get_escaped(value);                                           // Escape HTML 
        let divAnswers = document.createElement('div');                                     

        // Push data intop divs
        divAnswers.classList.add("cell-answers")
        divAnswers.innerHTML = `
            <input type="radio" onclick="app_check_answer(this)" value="${aIndex}" name="answer-choice">
            <p> ${newValue}</p>
        `;

        // Append answer div to answer container
        answerDiv.appendChild(divAnswers);
    });
}


function app_check_answer(self) {

    // Init Vars
    answerIndex = parseInt(self.value);

    if (answerIndex === 0) {
        console.log("Correct!");
    }
    else {
        console.log("Wrong!");
    }
}




// Get Question
function get_question(questionIndex) {
    return questionLibrary[questionIndex].Q;
}


// Get Question Answer from Array. 0 is always answer.
function get_question_answer_array(questionIndex) { 

    return questionLibrary[questionIndex].A;

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