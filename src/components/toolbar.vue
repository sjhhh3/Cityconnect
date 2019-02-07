<template>
    <v-container fluid class="px-0 py-0">
    <video autoplay muted loop id="myVideo" style="position: fixed">
        <source src=".././assets/bv.mp4" type="video/mp4">
    </video>
    <v-toolbar flat color="transparent" class="pt-4 hidden-sm-and-down">
        <v-toolbar-title class="mt-5 ml-4">
            <router-link to="/"><img height="100" src=".././assets/cclogotrans.png"></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="px-5">
            <v-btn flat v-for="i in menu" :key="i.name" :to="i.url" class="white--text title mr-5">{{i.name}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
<section class="hidden-md-and-up" style="z-index: 1000; position: relative">
    <v-layout column align-center justify-center class="py-3">
    <v-flex><router-link to="/"><img height="70" src=".././assets/cclogotrans.png"></router-link></v-flex>
    </v-layout>
<v-layout row wrap align-center class="text-xs-center">

    <v-flex v-for="i in menu" :key="i.name" :to="i.url" active-class="" class="white--text title">{{ i.name }}</v-flex>

</v-layout>
</section>
    </v-container>
</template>

<script>
    export default {
        name: "toolbar",
        data () {
            return {
                menu: [
                    {name: 'Home',  url: '/'},
                    {name: 'Info',  url: 'home#info'},
                    {name: 'Contact',  url: 'home#contact'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>