<template>
    <div class="Congratulations" :style="'background-image: url(\'/cards/' + where.parent + '/' + where.image + '\')'">
        <img class="ObjectImage" :src="'/objects/' + object.image">
        <h1>Contratulations, you have founded the <span class="ObjectName">{{ object.name }}</span>!</h1>
        <h1>It was hidden <span class="WhereName">{{ where.name }}</span>!</h1>
        <button class="NewGame btn btn-success" @click="newGame">New Game</button>
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    computed: {
        object() {
            return store.game.object;
        },

        where() {
            const where = store.game.where;
            let card = false;

            store.cards.forEach(c => {
                if (c.name === where)
                    card = c;
            });

            return card;
        }
    },

    methods: {
        newGame() {
            store.startGame();
        }
    }
}
</script>

<style scoped>
.Congratulations {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    -webkit-text-stroke: 1px white;
    /* width and color */
    font-weight: bold;

    width: 100%;
    height: 100%;
}

.ObjectImage {
    max-height: 256px;
    margin: 25px;
    -webkit-filter: drop-shadow(15px 15px 15px #666666);
    filter: drop-shadow(15px 15px 15px #666666);
}

.ObjectName, .WhereName {
    color: red;
}

h1,
h2 {
    background-color: white;
}

.NewGame {
    font-size: 32px;
    -webkit-filter: drop-shadow(15px 15px 15px #666666);
    filter: drop-shadow(15px 15px 15px #666666);
}
</style>