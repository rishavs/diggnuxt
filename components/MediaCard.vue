<template>
  	<v-flex lg2 xs2>
<!--     	<v-card  color="primary">
    	  	<v-card-text class="px-10">2</v-card-text>
    	</v-card> -->
		<v-card>
			<v-card-media :src="props.thumb" height="200px">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-card-text >{{props.title}}</v-card-text>
					</v-layout>
				</v-container>
			</v-card-media>
			<v-card-actions>
			<v-spacer></v-spacer>
				<v-btn icon nuxt :to="/p/ + props.id">
					<v-icon>comment</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
  	</v-flex>

</template>

<script>
    export default {
        props: ['props']
    }
</script>