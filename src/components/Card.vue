<template>
    <div class="CardBox">
        <div class="Card">
            <pick-object v-if="!object"></pick-object>
            <guess-where v-if="object && !guessed && !missed"></guess-where>
            <contratulations v-if="object && guessed"></contratulations>
            <missed v-if="object && missed"></missed>
        </div>
    </div>
</template>

<script>
import store from "$/store.js";
import PickObject from "./PickObject.vue";
import GuessWhere from "./GuessWhere.vue";
import Contratulations from "./Contratulations.vue";
import Missed from "./Missed.vue";

export default {
    computed: {
        object() {
            return store.game.object;
        },

        guessed() {
            return store.game.guessed;
        },

        missed() {
            return store.game.missed;
        }
    },

    components: {
        PickObject,
        GuessWhere,
        Contratulations,
        Missed
    }
}
</script>

<style scoped>
.Translation {
    color: red;
}

.CardBox {
    width: calc(100% - 200px);
    max-height: calc(100% - 100px);
    height: 100%;
    padding: 30x;
    margin: auto;
    overflow: hidden;
}

.Card img {
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
}

.Card {
    border: 4px dashed red;
    padding: 30px;
    height: 100%;
}

.GuessWhat {
    cursor: pointer;
}
</style>