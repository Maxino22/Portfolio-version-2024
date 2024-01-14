<template>
	<div
		class="prose dark:prose-h1:text-white dark:prose-h2:text-white dark:prose-h3:text-white dark:prose-a:text-primary-400"
		v-html="markdown().render(story.content.USES)"
	></div>
</template>

<script setup lang="ts">
import markdown from 'markdown-it'

const story = await useAsyncStoryblok('uses', { version: 'draft' })

useSeoMeta({
	title: 'Uses',
	description: 'Tools, editors, software i use ',
})
</script>
