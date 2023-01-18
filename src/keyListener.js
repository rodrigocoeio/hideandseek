import store from "$/store";

const listenKeyBoardEvents = function (e) {
  if (store.game.started) {
    // Open Guess Where box on space
    if (e.keyCode == 32) {
      $("#guessWhere").trigger("focus");
    }
  }
};

window.addEventListener("keydown", listenKeyBoardEvents);
