<template>
    <div class="CardBox">
        <div class="Card">
            <pick-object v-if="!object"></pick-object>
            <guess-where v-if="object && !guessed"></guess-where>
            <contratulations v-if="object && guessed"></contratulations>
        </div>
    </div>
</template>

<script>
import store from "$/store.js";
import PickObject from "./PickObject.vue";
import GuessWhere from "./GuessWhere.vue";
import Contratulations from "./Contratulations.vue";

export default {
    computed: {
        object() {
            return store.game.object;
        },

        guessed() {
            return store.game.guessed;
        }
    },

    components: {
        PickObject,
        GuessWhere,
        Contratulations
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