<template>
    <div class="CardBox">
        <div class="Card">
            <pick-object v-if="!object"></pick-object>
            <guess-where v-if="object && !guessed && !missed && !presentPlaces"></guess-where>
            <present-places v-if="object && presentPlaces"></present-places>
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
import PresentPlaces from "./PresentPlaces.vue";

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
        },

        presentPlaces() {
            return store.game.presentPlaces;
        }
    },

    components: {
        PickObject,
        GuessWhere,
        Contratulations,
        Missed,
        PresentPlaces
    }
}
</script>

<style scoped>
.Translation {
    color: red;
}

.CardBox {
    width: calc(100% - 200px);
    height: calc(100% - 100px);
    border: 4px dashed black;
    border-radius: 30px;
    margin: auto;
    overflow: hidden;
}

.Card img {
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
}

.Card {
    height: 100%;
}

.GuessWhat {
    cursor: pointer;
}
</style>