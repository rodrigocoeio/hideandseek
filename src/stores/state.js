import categories from "$/categories.js";
import objects from "$/objects.js";

export default {
  game: {
    started: false,
    category: false,
    object: false,
    cardSorting: "shuffle",
    deck: [],
    deck_index: 0,
    presentPlaces: false,
    presentIndex: 0,
    guessed: false,
    missed: false,
    pleaseSelectCategory: false
  },

  configs: {
    sound: true
  },
  
  categories,
  objects
};
