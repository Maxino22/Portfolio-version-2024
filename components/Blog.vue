<template>
	<nuxt-link :to="post._path" class="w-full">
		<div
			class="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-800 hover:border-primary-600 dark:hover:border-primary-400"
		>
			<nuxt-img
				alt="Maxwell Muhanda Project"
				class="object-cover object-center border-b border-solid lg:h-48 md:h-36"
				width="544"
				height="306"
				:src="`/images/blog/${post.cover}`"
			/>

			<div class="p-6">
				<h4
					class="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white"
				>
					{{ post.title }}
				</h4>
				<p class="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
					{{ post.date }}
				</p>
			</div>
		</div>
	</nuxt-link>
</template>

<script setup lang="ts">
const prop = defineProps({
	post: {
		type: Object,
		required: true,
	},
})
</script>
