export default {
  startGame() {
    if (
      !this.currentCategory ||
      !this.currentCategory.cards ||
      this.currentCategory.cards.length === 0
    ) {
      this.game.pleaseSelectCategory = true;
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
  },

  async loadCategories() {
    try {
      const categoriesJson = await fetch("/categories.json");
      this.categories = await categoriesJson.json();
    } catch (e) {
      //console.error('Failed loading categories.json!');
    }
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
      if (this.configs.sound) playAudio("/audios/right" + number, "mp3");
      return true;
    } else {
      this.game.guessed = false;
      this.game.missed = where;
      const number = Math.floor(Math.random() * 3);
      if (this.configs.sound) playAudio("/audios/wrong" + number, "mp3");
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

  presentPrevious() {
    if (this.game.presentIndex > 0) {
      this.game.presentIndex--;
      this.playPresentCardAudio();
    }
  },

  presentNext() {
    const cardsNumber = this.cards.length;
    if (this.game.presentIndex + 1 < cardsNumber) {
      this.game.presentIndex++;
      this.playPresentCardAudio();
    }
  },

  playPresentCardAudio() {
    const card = this.cards[this.game.presentIndex]
      ? this.cards[this.game.presentIndex]
      : false;

    if (card) this.playCardAudio(card);
  },

  stopAudio() {
    if (this.game.audio) {
      this.game.audio.pause();
      this.game.audio = false;
    }
  },

  selectCategory(category) {
    this.game.pleaseSelectCategory = false;
    this.game.category = category;
  },
};
