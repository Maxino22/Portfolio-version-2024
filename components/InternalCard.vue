<template>
	<nuxt-link
		:to="link"
		class="w-full flex flex-col justify-between row-span-1 p-4 border-2 border-solid rounded-lg border-gray-200 dark:border-gray-800 transform hover:border-primary-600 dark:hover:border-primary-400"
	>
		<h3 class="text-lg font-bold leading-4 tracking-tight">{{ title }}</h3>
		<div
			class="pt-4 text-sm prose text-gray-800 max-w-none dark:text-gray-200 flex items-center gap-1"
		>
			<slot />
		</div>
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps({
	link: String,
	title: String,
})
</script>

<style scoped></style>
