<template>
    <v-container px-100 fluid grid-list-sm app>
        <v-layout row wrap>

            <MediaCard v-for="(post, index) in posts" :key="index" :props="post"/>
            <!-- <v-flex lg12 sm8 md6> -->

    <!--             <div class="text-xs-center">
                    <h1>POSTS :</h1>
                    <ul>
                        <li v-for="(post, index) in posts" :key="index">
                        <nuxt-link :to="/p/ + post.id">{{ post.title }}</nuxt-link>
                      </li>
                    </ul>
                </div> -->


    <!--             <v-card flex1>
                    <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
                    <v-card-text>
                        <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
                        <p>For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.</p>
                        <p>If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.</p>
                        <p>Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p>
                        <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
                        <div class="text-xs-right">
                            <em><small>&mdash; John Leider</small></em>
                        </div>
                        <hr class="my-3">
                        <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
                        <br>
                        <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex> -->
        </v-layout>
    </v-container>
</template>


<script>
    import MediaCard from '~/components/MediaCard'

    import backend from '~/services/backend'

    export default {
        async asyncData () {
            let response = await backend.get_all_posts()
            return { posts: response }
        },
        components: {
            MediaCard
        }
    }
</script>