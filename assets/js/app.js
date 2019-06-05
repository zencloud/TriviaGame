/// Core Application


// App first run initialization ------------

// Hide core elements
ui_hide_element("container-time-remaining");
ui_hide_element("container-question");
ui_hide_element("container-answers");
ui_hide_element("container-message-hud");


// Bind Setup Button
document.getElementById("btn-game-start").addEventListener('click', game_new_game);