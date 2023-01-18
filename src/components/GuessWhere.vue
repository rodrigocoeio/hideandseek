<template>
    <img class="Object" :src="'/objects/' + object.image">
    <h1>Where is the {{ object.name }} hidden ?</h1>

    <select id="guessWhere" class="form form-select" v-model="guessTry" @change="guessWhere">
        <option value="0">Guess Where?</option>
        <option v-for="card, index in cards" :value="card.name">{{ card.name }}</option>
    </select>
</template>

<script>
import store from "$/store.js";

export default {
    data() {
        return {
            guessTry: ""
        }
    },

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
            store.guessWhere(this.guessTry);
            this.guessTry = "";
            return false;
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
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
}

.Place h1 {
    -webkit-text-stroke: 1px white;
    /* width and color */
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
    opacity: 0.1;
}

.Object {
    height: 128px;
}

select {
    max-width: 300px;
    margin: auto;
    margin-bottom: 15px;
    font-size: 18px;
}
</style>