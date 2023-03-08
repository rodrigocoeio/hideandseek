<template>
    <h1>What do you wanna hide?</h1>
    <h2>Pick an object</h2>


    <div class="ObjectsBox">

        <div class="Object" v-for="object in objects" @click="selectObject(object)">
            <img :src="'/objects/' + object.image">
            <h3>{{ object.name }}</h3>
        </div>

    </div>
</template>

<script>
import store from "$/store";
export default {
    computed: {
        objects() {
            return store.objects;
        }
    },

    methods: {
        selectObject(object) {
            store.selectObject(object);
        }
    }
}
</script>

<style scoped>
.ObjectsBox {
    max-width: 250px;
    max-height: calc(100% - 150px);
    margin: auto;
    text-align: center;
    overflow: auto;
}

.Object {
    padding: 5px;
    margin-bottom: 15px;
    text-align: center;
    cursor: pointer;
}

.Object:hover {
    background-color: chartreuse;
    text-shadow: white 3px 0 10px;
    box-shadow: 3px 3px gray;
}

.Object img {
    max-height: 84px;
}
</style>