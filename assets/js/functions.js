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
    document.getElementById("question-display").innerHTML = `<p class="center">${get_question(questionIndex)}</p>`;
    
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
            <input type="radio" onclick="app_check_answer(this)" id="${aIndex}" name="answer-choice">
            <p>${newValue}</p>
        `;

        // Append answer div to answer container
        answerDiv.appendChild(divAnswers);

        // Update Question Number
        let questionNumberDiv = document.getElementById("question-number");
        questionNumberDiv.innerText = `Question ${appData.questionID+1} of 5:`;
    });

    // Reset timer
    app_timer_reset();
}

// Reset Question Timer
function app_timer_reset() {
    
    // Reset Old Timer
    clearInterval(appData.timerIndex);
    appData.timeSecLeft = 20;
    document.getElementById("time-display").innerText = appData.timeSecLeft + 's';

    // Begin Timer
    appData.timerIndex = setInterval(() => {
        appData.timeSecLeft--;
        document.getElementById("time-display").innerText = appData.timeSecLeft + 's';

        // Check timeout
        if (appData.timeSecLeft === 0) {
            
            appData.questionWrong++;
            appData.questionID++;
            app_load_question(appData.questionID);
            //clearInterval(appData.timerIndex);
        }
    }, 1000);
}


// Check if Answer is Correct
function app_check_answer(self) {

    // Init Vars
    answerIndex = parseInt(self.id);

    if (answerIndex === 0) {
        
        appData.questionCorrect++;
        //self.parentElement.style.color = "green";
    }
    else {
        appData.questionWrong++;
    }
    
    app_next_question();
    app_check_round(); 
}

// Icrease question ID count
function app_next_question() {
    appData.questionID++;
}

// Check Round
function app_check_round() {

    // Check if last question, else next question
    if (appData.questionID === appData.questionTotal) {
        app_end_session();
    }
    else {
        
        let answerDiv = document.getElementById("container-answers");
        answerDiv.classList.remove("animate-swing-in");
        answerDiv.classList.add("animate-flip-up");


        setTimeout(() => {
            app_load_question(appData.questionID);
        }, 500);

        setTimeout(() => {
            answerDiv.classList.remove("animate-flip-up");
            answerDiv.classList.add("animate-drop-div");
        }, 500);
    }

}

function app_end_session() {

    // Clear Ttimer
    clearInterval(appData.timerIndex);

    // Hide UI Elements
    ui_hide_element("container-answers");
    ui_hide_element("container-time-remaining");

    // Show Elements
    ui_show_element("btn-game-start");

    // Update Existing Containers
    let questionNumberText = document.getElementById("question-number");
    let questionText = document.getElementById("question-display");

    questionNumberText.innerText = "All questions complete."
    questionText.innerText = `
        Correct: ${appData.questionCorrect}
        Missed: ${appData.questionWrong}
    `;

    // Setup for next session
    app_reset_data();
}


function app_reset_data() {
    appData.questionID      = 0;
    appData.questionWrong   = 0;
    appData.questionCorrect = 0;
}

// Get Question String
function get_question(questionIndex) {
    return questionLibrary[questionIndex].Q;
}

// Get Answer Array. 0 is always answer.
function get_question_answer_array(questionIndex) { 
    return questionLibrary[questionIndex].A;
}

// Get Question Answer by index
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