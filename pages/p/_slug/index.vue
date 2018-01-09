<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <h2>Id: {{ $route.params.slug }}</h2>
        <pre>{{ post.content }}</pre>
    </div>
</template>


<script>

import backend from '~/services/backend'

export default {

    async asyncData ({ params }) {
        // We can use async/await ES6 feature
        let response = await backend.get_current_post(params.slug)
        return { post: response }
    },

    components: {

    }
}
</script>

<style>

</style>
