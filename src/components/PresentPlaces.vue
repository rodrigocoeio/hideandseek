<template>
    <div class="PresentationBox">
        <button class="btn btn-primary" :disabled="presentIndex === 0" @click="previousCard">Previous</button>
        {{ presentIndex+ 1 }} / {{ cardsNumber }}
        <button class="btn btn-primary" :disabled="(presentIndex + 1) === cardsNumber" @click="nextCard">Next</button>
        <button class="btn btn-danger" @click="quitPresentation">Quit Presentation</button>

        <h1 v-if="card" @click="playCard()">{{ card.name }}</h1>
        <div class="Place" v-if="card" @click="playCard()"
            :style="'background-image: url(\'/cards/' + card.parent + '/' + card.image + '\')'">
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

        cardsNumber() {
            return store.cards.length;
        }
    },

    mounted() {
        //store.game.presentIndex = 0;
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
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    -webkit-text-stroke: 1px white;
    /* width and color */
    font-weight: bold;

    width: 100%;
    height: 100%;
}

button {
    margin-left: 15px;
}
</style>