/// Core Application

// DATA
// Question Libraryu
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

]

console.log(get_question(0))
console.log(get_question_answer(0, 0))
// App first run initialization ------------

// Hide core elements
ui_hide_element("container-time-remaining");
ui_hide_element("container-question");
ui_hide_element("container-answers");
ui_hide_element("container-message-hud");


// Bind Setup Button
document.getElementById("btn-game-start").addEventListener('click', game_new_game);