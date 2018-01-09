<template>
    <v-form>
        <v-text-field box type="email" label="E-mail" v-model="loginEmail" :error-messages="emailErrors" required></v-text-field>
        <v-text-field box type="password" label="Password" v-model="loginPassword" :error-messages="passwordErrors" required></v-text-field>
        <v-btn @click="submit">submit</v-btn>
    </v-form>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'
    import backend from '~/services/backend'
    
    export default {
        data () {
            return {
                loginEmail: '',
                loginPassword: ''

            }
        },
        mixins: [validationMixin],
        validations: {
            loginEmail: { required, email },
            loginPassword: { required, maxLength: maxLength(10) }
        },
        methods: {
            submit () {
                console.log('Attempting to log in...')
                backend.login(this.loginEmail, this.loginPassword)
                // event.preventDefault();
            }
        },
        computed: {

            emailErrors () {
                const errors = []
                if (!this.$v.loginEmail.$dirty) return errors
                !this.$v.loginEmail.email && errors.push('Must be valid e-mail')
                !this.$v.loginEmail.required && errors.push('E-mail is required')
                return errors
            },

            passwordErrors () {
    
            }
        }
    }
</script>

