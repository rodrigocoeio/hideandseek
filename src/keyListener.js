import store from "$/store";

const listenKeyBoardEvents = function (e) {
  if (store.game.started) {
    // Present Places
    if (store.game.presentPlaces) {
      switch (e.key) {
        // Quit Presentation
        case "Escape":
          store.game.presentPlaces = false;
          break;
        // Previous Card
        case "ArrowLeft":
          store.presentPrevious();
          break;
        // Next Card
        case "ArrowRight":
          store.presentNext();
          break;
        case "Enter":
          store.presentNext();
          break;
        case "Space":
          store.playPresentCardAudio();
          break;
      }
    }

    // Open Guess Where box on space
    if (e.keyCode == 32) {
      if (!$("#guessWhere").is(":focus")) {
        return $("#guessWhere").trigger("focus");
      }
    }

    // On Enter
    if (e.keyCode == 13) {
      if (store.game.guessed) {
        return store.startGame();
      }

      if (store.game.missed) {
        return store.tryAgain();
      }
    }
  }
};

if (!window.keylistener) {
  window.addEventListener("keydown", listenKeyBoardEvents);
  window.keylistener = true;
}
