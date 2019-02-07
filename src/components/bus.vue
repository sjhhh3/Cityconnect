<template>
    <section>
        <v-container fluid class="px-0 py-0" style="background-color: #10114f">
            <v-flex xs12 sm8 offset-sm2>
            <v-toolbar style="background-color: #10114f" flat class="py-3">
                <v-toolbar-title class="white--text display-2 py-2">
                    City Connecting WMATA Bus
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn flat v-for="i in menu" :key="i.name" :to="i.url" class="white--text title my-4" style="border-right:1px solid white; height: 40px">{{i.name}}</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            </v-flex>
        </v-container>

        <v-container class="pa-0">
            <v-flex xs12 sm10 offset-sm1>
            <v-layout row style="background-color: aliceblue; height: 700px" class="mx-5" >
                <v-flex xs6 sm2 style="background-color: #abcdef" class="mr-1 pa-3">
                    <v-btn round v-for="b in buttons" :key="b.name" block class="my-3" style="height: 50px">{{ b.name }}</v-btn>
                </v-flex>
                <v-flex xs6 sm8 class="px-4">
                    <v-layout column justify-center>
                        <v-flex style="background-color: #00AFBD" class="white--text display-1 pa-2">
                            DC WMATA Buses
                        </v-flex>
                        <v-flex style="background-color: #e5e5e5" class="px-4 py-2 title">
                            <v-select
                                    :items="items"
                                    label="Bus Route"

                            ></v-select>
                            <v-select
                                    :items="items2"
                                    label="Bus Direction"
                            ></v-select>
                            <v-select
                                    :items="items"
                                    label="Bus Stop"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex xs6 sm2 style="background-color: #abcdef" class="pa-3">
                    <p class="title">User Instruction</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </v-flex>
            </v-layout>
            </v-flex>
        </v-container>
        <myfooter></myfooter>
    </section>
</template>

<script>

    import myFooter from "./footer";

    export default {
        components: {
            myfooter: myFooter
        },
        data() {
            return {
                name: "bus",

                menu: [
                    {name: 'Settings', url: '/'},
                    {name: 'Home', url: '/'},
                    {name: 'Help', url: '/'},
                ],

                buttons: [
                    {name: 'Find Your Bus', url: '/'},
                    {name: 'My Bus', url: '/'},
                    {name: 'Get Help', url: '/'},
                    {name: 'Mobile Access', url: '/'},
                ],

                items: ['Item1', 'Item2', 'Item3'],
                items2: ['Items2-1', 'Items2-2', 'Items2-3'],


            }
        }
    }
</script>

<style scoped>

</style>