<template>
    <v-toolbar fixed app clipped-left>

        <v-toolbar-items >
            <v-btn flat nuxt to="/">Digglu</v-btn>
        </v-toolbar-items>

        
        <v-container fluid>
            <v-text-field solo name="searchbar" id="searchbar" prepend-icon="search" placeholder="Search..."></v-text-field>
        </v-container>
            

        <!-- <v-spacer></v-spacer> -->
        <v-toolbar-items >
            <v-btn :ripple="false" flat>New Post</v-btn>
            <v-menu offset-y>
                <v-btn slot="activator">
                    <v-icon>account_circle</v-icon> 
                    &nbsp User Name &nbsp
                    <v-icon>keyboard_arrow_down</v-icon> 
                </v-btn> 
                <v-list>
                    <v-list-tile @click="">
                        <v-list-tile-title>Profile</v-list-tile-title>
                    </v-list-tile>                
                    <v-list-tile @click="">
                        <v-list-tile-title>Settings</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="logout">
                        <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile>    
                </v-list>
            </v-menu>
        </v-toolbar-items>

        <v-btn flat nuxt to="/login">Login</v-btn>
        <v-btn outline color="blue">Register</v-btn>
    </v-toolbar>
</template>

<script>
    import backend from '~/services/backend'
    export default {
        methods: {
            logout () {
                console.log('Attempting to log out...')
                backend.logout()
                // event.preventDefault();
            }
        }

    }
</script>
