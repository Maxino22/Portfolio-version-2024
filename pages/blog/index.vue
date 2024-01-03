<template>
	<main>
		<page-title>Articles</page-title>
		<p class="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
			Free blogs with interactive examples
		</p>
		<div class="mt-5 mb-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
			<Blog v-for="blog in posts" :post="blog" />
		</div>
	</main>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blogs', () =>
	queryContent('/blog').find()
)

useSeoMeta({
	title: "My Blog"
})
</script>
