<template>
    <div class="PresentationBox">
        <div class="Buttons">
            <button class="btn btn-primary" :disabled="presentIndex === 0" @click="previousCard">Previous</button>
            {{ presentIndex + 1 }} / {{ cardsNumber }}
            <button class="btn btn-primary" :disabled="(presentIndex + 1) === cardsNumber" @click="nextCard">Next</button>
            <button class="btn btn-danger" @click="quitPresentation">Quit Presentation</button>
        </div>
        <h1 v-if="card" @click="playCard()">{{ card.name }}</h1>
        <div class="Place" v-if="card" @click="playCard()">
            <img :src="cardImage" />
        </div>
    </div>
</template>
<script>
import store from "$/store.js";

export default {
    computed: {
        presentIndex() {
            return store.game.presentIndex;
        },
        card() {
            const card = store.cards[this.presentIndex] ? store.cards[this.presentIndex] : false;

            return card;
        },
        cardImage() {
            if (this.card)
                return "/cards/" + this.card.parent + "/" + this.card.image;
        },

        cardsNumber() {
            return store.cards.length;
        }
    },

    mounted() {
        store.game.presentIndex = 0;
        this.playCard();
    },

    methods: {
        quitPresentation() {
            store.game.presentPlaces = false;
        },

        previousCard() {
            store.presentPrevious();
        },

        nextCard() {
            store.presentNext();
        },

        playCard() {
            store.playPresentCardAudio();
        }
    }
}
</script>

<style scoped>
.PresentationBox {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.Place {
    height: calc(100% - 70px);
}

.Place img {
    border: 3px dotted black;
    border-radius: 30px;
    height: calc(100% - 70px);
    box-shadow: 5px 5px gray;
}

h1 {
    text-shadow: gray 3px 1px 1px;
    -webkit-text-stroke: 1px black;
    margin-top: 5px;
    margin-bottom: 0px;
}

.Buttons {
    font-size: 24px;
    margin-top: 15px;
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
</style>