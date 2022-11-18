<template>
    <h1>What do you wanna hide?</h1>
    <h3>Pick an object</h3>


    <div class="ObjectsBox">

        <div class="Object" v-for="object in objects" @click="selectObject(object)">
            <img :src="'/objects/' + object.image">
            <h5>{{ object.name }}</h5>
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
    max-height: 400px;
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
    background-color: aquamarine;
}

.Object img {
    max-height: 64px;
}
</style>