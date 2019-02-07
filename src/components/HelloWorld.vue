<template>

<section>

        <toolbar></toolbar>


    <v-container class="pa-0 my-3 hidden-sm-and-down">
    <section style="height: 800px">

    <v-layout justify-start row align-center fill-height>

      <v-flex xs12 sm4 offset-sm7>

          <v-layout style="position: absolute">
              <v-flex class="white--text display-3" style="z-index: 100; font-weight: bold">City Connecting is reimagining cities to enable the next generation of living environments.
              </v-flex>
          </v-layout>

      </v-flex>
    </v-layout>

    </section>
</v-container>

    <section class="py-5 hidden-md-and-up">
        <v-container grid-list-xl class="py-5">
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                        <v-card-text class="display-1 white--text text-xs-center">City Connecting is reimagining cities to enable the next generation of living environments.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>
    </section>


    <section  style="background-color: white; z-index: 1000; position: relative" id="info">
    <v-container grid-list-xl class="mt-5 py-5">

        <v-layout row wrap align-center>
            <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                        <v-icon x-large>directions_transit</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Real-Time Transit Information</div>
                    </v-card-title>
                    <v-card-text style="font-size: 16px">Empower travelers with richer information in more places. City Connecting delivers more accurate information in more channels than ever—including mobile, energy-conscious and high-resolution displays at transit stations and vehicles, with a suite of APIs that support opendata. Transit agencies can leverage the centralized management to interact with passengers along and improve their transit experience.
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                        <v-icon x-large>insert_chart</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Real-Time Data System</div>
                    </v-card-title>
                    <v-card-text style="font-size: 16px">The new generation of Visualized Data System will enable agencies to proactively manage on-time performance, which is the linchpin of customer satisfaction. City Connecting delivers advanced capabilities in one portal that includes dynamic maps with real-time and historical data, user conﬁgurable dashboards with widgets, instant access to rich contextual information and reporting across multiple data sources.
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                        <v-icon x-large>build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Connected / Autonomous Vehicle</div>
                    </v-card-title>
                    <v-card-text style="font-size: 16px">The evolution of worldwide modern transportation will focus on the Connected Vehicle and Autonomous Vehicle in the near future. The further goal of City Connecting is to develop and improve the software and hardware at the medium level of these emerging technologies, in order to support the transition period from human driving environment to vehicle-self driving environment.
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>


    </v-container>
</section>


    <section class="py-5" style="background-color: rgba(200,200,200,0.2); z-index: 1000; position: relative">
        <v-container grid-list-xl class="py-5 my-3">
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                        <v-card-title primary-title class="layout justify-center">
                            <div class="display-3 white--text text-xs-center">To The Future</div>
                        </v-card-title>

                        <v-card-text class="display-1 white--text text-xs-center">City Connecting is creating a new concept of living to accelerate urban innovation and serve as a beacon for cities around the world.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>
    </section>

    <section class="pt-2 pb-5" style="background-color: white; z-index: 1000; position: relative" id="contact">
        <v-container grid-list-xl class="py-3">

            <v-layout row wrap align-center>
                <v-flex xs12 md4 offset-md1>

                        <v-card class="elevation-0 transparent">

                            <v-card-title primary-title class="layout justify-center mb-2">
                                <div class="display-2 text-xs-center mr-3" style="font-weight: bold">Contact</div>

                            </v-card-title>

                            <v-card-text style="font-size: 16px">
                                <v-layout row wrap>

                                    <v-flex xs12 md6 class="text-xs-left">
                                        <v-layout column>
                                            <v-flex class="title">Contact City Connecting</v-flex>
                                            <v-flex>jsun@cityconnecting.com</v-flex>
                                    </v-layout>
                                    </v-flex>
                                    <v-flex xs12 md6 class="text-xs-left">
                                        <v-layout column>
                                            <v-flex class="title">Daytime Phone</v-flex>
                                            <v-flex> +1-202-213-2037</v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12 md6 class="text-xs-left">
                                        <v-layout column>
                                            <v-flex class="title">Address</v-flex>
                                            <v-flex>Potomac, MD. USA</v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12 md6 class="text-xs-left">
                                        <v-layout column>
                                            <v-flex class="title">Website</v-flex>
                                            <v-flex>cityconnecting.com</v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>

                        </v-card>


                </v-flex>
                <v-flex xs12 md4 offset-md2>
                    <v-card class="elevation-0 transparent">

                        <v-card-text  class="layout justify-center"> <img height="200" src="../assets/att.png">
                        </v-card-text>

                        <v-card-title primary-title class="layout justify-center">
                            <div class="headline">American Advanced Technology, LLC</div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>


        </v-container>

    </section>
    <myfooter></myfooter>
</section>
</template>

<script>

import Toolbar from "./toolbar";
import myFooter from "./footer";
export default {
    components: {
        toolbar: Toolbar,
        myfooter: myFooter
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
