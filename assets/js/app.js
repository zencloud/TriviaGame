/// Core Application

// Question Library
// A[0] is always answer
const questionLibrary = [

    {
        Q: "Which HTML element takes JavaScript?",
        A: ['<script>', '<p>', '<javascript>', '<head>']
    },

    {
        Q: "How do we declare a local variable?",
        A: ['let', 'local', 'var', 'const']
    },

    {
        Q: "How do you create a named function?",
        A: ['function myFunction()', 'function:(myFunction)', 'function = myFunction', 'let function = myFunction()']
    },

    {
        Q: "let myAnswer = (1 + 1) * (5 - 3)",
        A: ['4', '6', '0', '12']
    },

    {
        Q: "Did you enjoy this trivia?",
        A: ['Yes', 'Yes', 'Yes', 'Yes']
    },

];

// App Data
const appData = {
    
    // Question Data
    questionTotal:    questionLibrary.length,
    questionRound:   0,     // Question X of Y
    questionID:      0,     // Array index to grab question from
    questionCorrect: 0,     // Correct questions total
    questionWrong:   0,     // Wrong questions total

    // Time Data
    timeMaxRound:    20,
    timeSecLeft:     this.timeMaxRound,     // Value equal to seconds
    timerIndex:      0,

    // Audio
    audioBtnClick: new Audio('assets/audio/audio_btn_select.wav')

}

// App first run initialization ------------

// Hide core elements
ui_hide_element("container-time-remaining");
ui_hide_element("container-question");
ui_hide_element("container-answers");
ui_hide_element("container-message-hud");


// Bind Setup Button
document.getElementById("btn-game-start").addEventListener('click', app_new_game);
