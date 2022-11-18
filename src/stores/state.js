import categories from "$/categories.js";
import objects from "$/objects.js";

export default {
  game: {
    started: false,
    category: "all",
    object: false,
    cardSorting: "shuffle",
    deck: [],
    deck_index: 0
  },

  configs: {
    sound: true
  },
  
  categories,
  objects
};
