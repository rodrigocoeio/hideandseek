<template>
    <div class="GuessWhereBox">
        <div class="GuessWhere">
            <img class="Object" :src="'/objects/' + object.image">
            <h1>Where is the <span class="ObjectName">{{ object.name }}</span> hidden ?</h1>

            <select id="guessWhere" placeholder="Guess Where?" class="GuessWhereSelect" v-model="guessTry"
                @change="guessWhere">
                <option selected disabled value="">Pick a Place</option>
                <option v-for="card, index in cards" :value="card.name">{{ card.name }}</option>
            </select>

            <button class="btn btn-primary" @click="presentPlaces()">Present Places</button>
        </div>
    </div>
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
    height: 100%;
    margin-top: -30px;
    display: flex;
    place-content: center;
    align-items: center;
    place-items: center;
}

h1 {
    font-weight: 1000;
    -webkit-text-stroke: 1px black;
    text-shadow: gray 3px 1px 1px;
}

.ObjectName {
    color: red;
}

.Object {
    height: 128px;
}

.GuessWhereSelect {
    position: relative;
    top: 4px;
    padding: 12px;
    font-size: 24px;
    border-radius: 15px;
    cursor: pointer;
}

.GuessWhereSelect:not([disabled]):hover {
    background-color: chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

button {
    padding: 12px;
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