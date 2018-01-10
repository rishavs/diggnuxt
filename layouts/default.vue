<template>
    <v-app dark>

        <Navbar/>

        <v-content>
            <nuxt />
        </v-content>

        <Footsies />

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
