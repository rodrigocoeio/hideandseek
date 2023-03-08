<template>
    <div class="MissedBox">

        <h1>Sorry! You've missed it!<br>
            The <span class="ObjectName">{{ object.name }}</span> is not hidden <span class="WhereName">{{
                where.name
            }}</span>!</h1>

        <button class="TryAgain btn btn-success" @click="tryAgain">TryAgain</button>


        <div @click="playCard()" class="Missed" :style="'background-image: url(\'/cards/' + where.parent + '/' + where.image + '\')'">
            <!-- <img class="ObjectImage" :src="'/objects/' + object.image"> -->
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

        where() {
            const where = store.game.missed;
            let card = false;

            store.cards.forEach(c => {
                if (c.name === where)
                    card = c;
            });

            return card;
        }
    },

    methods: {
        tryAgain() {
            store.tryAgain();
        },

        playCard() {
            store.playCardAudio(this.where);
        }
    }
}
</script>

<style scoped>
.MissedBox {
    width: 100%;
    height: 100%;
}

.Missed {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    -webkit-text-stroke: 1px white;
    /* width and color */
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    height: 100%;
}

.ObjectImage {
    max-height: 180px;
    margin: 25px;
    -webkit-filter: drop-shadow(15px 15px 15px #666666);
    filter: drop-shadow(15px 15px 15px #666666);
}

.ObjectName,
.WhereName {
    color: red;
}

h1,
h2 {
    background-color: white;
    font-size: 20px;
}

.TryAgain {
    font-size: 20px;
    -webkit-filter: drop-shadow(15px 15px 15px #666666);
    filter: drop-shadow(15px 15px 15px #666666);
    margin-bottom: 10px;
}

button {
    padding: 8px;
    font-size: 14px;
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