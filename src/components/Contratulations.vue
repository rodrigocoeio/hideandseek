<template>
    <div class="CongratulationsBox">
        <h1>Contratulations!
            You've founded the <span class="ObjectName">{{ object.name }}</span>!</h1>
        <h1>It was hidden <span class="WhereName">{{ where.name }}</span>!</h1>
    </div>


    <button class="NewGame btn btn-success" @click="newGame">Start New Game</button>

    <div @click="playCard()" class="Congratulations">
        <img class="CardImage" :src="cardImage" />
        <img class="ObjectImage" :src="'/objects/' + object.image">
    </div>
</template>

<script>
import store from "$/store.js";

export default {
    computed: {
        object() {
            return store.game.object;
        },
        cardImage() {
            if (this.where)
                return "/cards/" + this.where.parent + "/" + this.where.image;
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

    mounted() {
        const playCard = this.playCard;
        setTimeout(playCard, 3000);
    },

    methods: {
        newGame() {
            store.startGame();
        },

        playCard() {
            store.playCardAudio(this.where);
        }
    }
}
</script>

<style scoped>
.Congratulations {
    margin: auto;
    width: fit-content;
    position: relative;
    cursor: pointer;
    height: calc(100% - 170px);
}

.Congratulations .CardImage {
    height: 100%;
    border: 3px dotted black;
    border-radius: 30px;
    box-shadow: 5px 5px gray;
}

.ObjectImage {
    position: absolute;
    top: 100px;
    left: calc(50% - 100px);
    max-width: 200px;
    opacity: 0.9;
    -webkit-filter: drop-shadow(15px 15px 15px #666666);
    filter: drop-shadow(15px 15px 15px #666666);
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
}

.ObjectName,
.WhereName {
    color: red;
}

h1,
h2 {
    font-size: 20px;
}

.NewGame {
    font-size: 20px;
    -webkit-filter: drop-shadow(15px 15px 15px #666666);
    filter: drop-shadow(15px 15px 15px #666666);
    margin-bottom: 10px;
}

button {
    padding: 8px;
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

@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>