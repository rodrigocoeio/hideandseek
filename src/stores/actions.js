export default {
  startGame() {
    if (
      !this.currentCategory ||
      !this.currentCategory.cards ||
      this.currentCategory.cards.length === 0
    ) {
      alert("Choose a Category or Subcategory");
      $("#categoryField").trigger("focus");
      return false;
    }

    console.log("Game Started");

    this.game.started = true;
    this.game.guessed = false;
    this.game.missed = false;
    this.game.object = false;
    this.game.where = false;

    this.cards.forEach((card) => {
      card.tried = false;
    });
  },

  quitGame() {
    if (this.game.audio) this.stopAudio();

    this.game.started = false;
    this.game.category = false;
  },

  selectObject(object) {
    this.game.object = object;
    this.hideObject();
  },

  hideObject() {
    const cards = shuffleArray([...this.cards]);
    const card = cards.pop();
    this.game.where = card.name;
  },

  tryAgain() {
    this.game.missed = false;
  },

  guessWhere(where) {
    if (where === this.game.where) {
      this.game.guessed = true;
      this.game.missed = false;
      const number = Math.floor(Math.random() * 2);
      if (this.configs.sound) playAudio("right" + number, "mp3");
      return true;
    } else {
      this.game.guessed = false;
      this.game.missed = where;
      const number = Math.floor(Math.random() * 3);
      if (this.configs.sound) playAudio("wrong" + number, "mp3");
      return false;
    }
  },

  playCardAudio(card) {
    this.stopAudio();

    const store = this;
    card = card ? card : this.card;

    const audioFile = "/cards/" + card.parent + "/" + card.audio;

    if (card.audio) {
      this.game.audio = playAudio(audioFile);
      this.game.audio.onended = function () {
        store.game.audio = false;
      };
    }
  },

  stopAudio() {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }
  },

  selectCategory(category) {
    this.game.category = category;
  }
};
