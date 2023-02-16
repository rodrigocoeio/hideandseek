<template>
    <img class="Object" :src="'/objects/' + object.image">
    <h1>Where is the <span class="ObjectName">{{ object.name }}</span> hidden ?</h1>

    <select id="guessWhere" placeholder="Guess Where?" class="form form-select" v-model="guessTry" @change="guessWhere">
        <option v-for="card, index in cards" :value="card.name">{{ card.name }}</option>
    </select>

    <button class="btn btn-primary" @click="presentPlaces()">Present Places</button>
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
        },

        presentPlaces() {
            store.game.presentPlaces = true;
        }
    }
}
</script>

<style scoped>
.GuessWhereBox {
    overflow: auto;
    max-height: calc(100% - 180px);
}

.ObjectName {
    color: red;
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