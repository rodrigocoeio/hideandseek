<template>
    <img class="Object" :src="'/objects/' + object.image">
    <h1>Where is the {{ object.name }} hidden ?</h1>

    <!-- <select class="form form-select" v-model="guessTry">
        <option value="0">Guess Where?</option>
        <option v-for="card, index in cards" :value="card.name">{{ card.name }}</option>
    </select> -->

    <div class="GuessWhereBox">
        <div @click="guessWhere(card)" :class="['Place', card.tried ? 'disabled' : '']" v-for="card in cards"
            :style="'background-image: url(\'/cards/' + card.parent + '/' + card.image + '\');'">
            <h1>{{ card.name }}</h1>
        </div>
    </div>
</template>

<script>
import store from "$/store.js";

export default {    
    computed: {
        object() {
            return store.game.object;
        },

        cards() {
            return sortByKey(store.cards, "name");
        }
    },

    methods: {
        guessWhere(card) {
            if (card.tried) return false;

            if (!store.guessWhere(card.name)) {
                card.tried = true;
            }

        }
    }
}
</script>

<style scoped>
.GuessWhereBox {
    overflow: auto;
    max-height: calc(100% - 180px);
}

.Place {
    cursor: pointer;
}

.Place h1 {
    -webkit-text-stroke: 1px white; /* width and color */
    font-weight: bold;
}

.Place:hover h1 {
    color: red;
}

.Place.disabled:hover h1 {
    color: black;
}

.Place.disabled {
    cursor: default;
    opacity: 0.3;
}

.Object {
    height: 128px;
}

select {
    max-width: 300px;
    margin: auto;
    margin-bottom: 15px;
    font-size: 32px;
}
</style>