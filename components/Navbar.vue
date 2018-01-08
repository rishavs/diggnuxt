<template>
    <v-toolbar fixed app clipped-left>

        <v-toolbar-items >
            <v-btn flat>Digglu</v-btn>
        </v-toolbar-items>

        
        <v-container fluid>
            <v-text-field solo name="searchbar" id="searchbar" prepend-icon="search" placeholder="Search..."></v-text-field>
        </v-container>
            

        <!-- <v-spacer></v-spacer> -->

        <v-btn :ripple="false" flat>New Post</v-btn>
        <v-menu offset-y>
            <v-btn flat slot="activator">Settings</v-btn>
            <v-list>
                <v-list-tile @click="">
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile>    
            </v-list>
        </v-menu>
        <v-btn flat>Logout</v-btn>
        <v-btn flat>Login</v-btn>
        <v-btn outline color="blue">Register</v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' }
            ]
        })

    }
</script>
