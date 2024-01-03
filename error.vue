<template>
	<div class="bg-white">
		<div
			class="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24"
		>
			<div class="pt-6 pb-8 space-x-2 md:space-y-5">
				<h1
					class="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-900 md:text-8xl md:leading-14 md:border-r-2 md:px-6 dark:border-black"
				>
					{{ error.statusCode }}
				</h1>
			</div>
			<div class="max-w-md">
				<p
					class="mb-4 text-xl font-bold leading-normal md:text-2xl dark:text-gray-900"
				>
					{{
						error.statusCode === 404
							? "Sorry we couldn't find this page."
							: error.message
					}}
				</p>
				<p class="mb-8 dark:text-gray-900" v-if="error.statusCode === 404">
					But dont worry, you can find plenty of other things on our homepage.
				</p>
				<nuxt-link
					to="/"
					class="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-primary hover:bg-primary-700 dark:hover:bg-primary-500 dark:text-white"
				>
					Back to homepage
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps(['error'])
</script>

<style scoped>
body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
