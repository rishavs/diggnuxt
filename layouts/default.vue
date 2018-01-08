<template>
    <v-app dark>

        <navbar/>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <footsies />

    </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footsies from '~/components/Footsies'

export default {
    data () {
        return {
            clipped: false,
            drawer: true,
            fixed: false
        }
    },
    components: {
        Navbar,
        Footsies
    }
}
</script>
