<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <!-- Navbar -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- Category Name -->
                    <li class="nav-item CategoryName" :title="categoryName">
                        <img src="/images/hideandseek.png" width="36" />
                        {{ categoryName }}
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                        <button class="GameSound form-check form-switch">
                            <input class="form-check-input" type="checkbox" name="sound" id="sound" v-model="configs.sound">
                            <label for="sound">Sound</label>
                        </button>
                    </li>
                    <!-- Quit Game -->
                    <li class="nav-item">
                        <button class="QuitGameButton" @click="quitGame">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            Quit Game
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import store from "$/store";

export default {
    computed: {
        game() {
            return store.game;
        },

        categoryName() {
            return store.categoryName;
        },

        card() {
            return store.card;
        },

        cards() {
            return store.cards;
        },

        cardIndex() {
            return store.game.cardIndex;
        },

        cardsNumber() {
            return store.cardsNumber;
        },

        configs() {
            return store.configs;
        }
    },

    watch: {
        card(card) {
            this.playAudio();
        }
    },

    methods: {
        playAudio() {
            $("#audioButton").trigger("blur");
            store.playCardAudio();
        },

        toggleImage() {
            $("#imageButton").trigger("blur");
            this.game.image = !this.game.image;
        },

        toggleName() {
            $("#nameButton").trigger("blur");
            this.game.name = !this.game.name;
        },

        toggleTranslation() {
            $("#translationButton").trigger("blur");
            this.game.translation = !this.game.translation;
        },

        previousCard() {
            $("#previousCardButton").trigger("blur");
            store.previousCard();
        },

        nextCard() {
            $("#nextCardButton").trigger("blur");
            store.nextCard();
        },

        quitGame() {
            store.quitGame();
        }
    },
};
</script>

<style scoped>
nav * {
    display: inline-block;
}

nav ul {
    margin: 0px;
    margin-bottom: 15px;
    list-style: none;
}

button {
    padding: 8px;
    font-size: 24px;
    border-radius: 15px;
    cursor: pointer;
    margin-left: 15px;
    vertical-align: middle;
}

button:not([disabled]):hover {
    background-color: chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

.PreviousCardButton:not([disabled]):hover {
    background-color: yellow;
}

.QuitGameButton:not([disabled]):hover {
    background-color: crimson;
}

.StartGame {
    margin: auto;
    margin-left: calc(50% - 100px);
}

.CategoryName {
    font-size: 24px;
    font-weight: bolder;
    padding-right: 15px;
    text-shadow: gray 3px 1px 1px;
}

.CategoryName img {
    position: relative;
    top: 10px;
}

.CardIndex {
    font-size: 24px;
}

.nav-item {
    margin-left: 10px;
}
</style>