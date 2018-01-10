import Vue from 'vue'
import {
    Vuetify,
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTextField,
    VMenu,
    VForm
} from 'vuetify'

Vue.use(Vuetify, {
    theme: {
        primary: '#2196F3',
        accent: '#ce93d8',
        secondary: '#424242',
        info: '#0D47A1',
        warning: '#ffb300',
        error: '#B71C1C',
        success: '#2E7D32'
    },
    components: {
        VApp,
        VCard,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        VTextField,
        VMenu,
        VForm
    }
})
