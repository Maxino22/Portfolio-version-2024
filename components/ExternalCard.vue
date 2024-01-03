<template>
	<div class="p-4 w-full sm:w-1/2 md:max-w-[34rem]">
		<div
			class="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-800 hover:border-primary-600 dark:hover:border-primary-400"
		>
			<nuxt-img
				alt="Maxwell Muhanda Project"
				class="object-cover object-center border-b border-solid lg:h-48 md:h-36"
				width="544"
				height="306"
				:src="image"
			/>
			<div class="p-6">
				<h4
					class="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white"
				>
					{{ title }}

					<span
						class="px-1 py-0.5 font-normal text-center rounded-full text-xs bg-primary-500 text-white"
						v-if="link === ''"
					>
						coming soon
					</span>
					<a v-else :href="link"><Icon name="ic:outline-launch" /></a>
				</h4>
				<p class="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	image: String,
	link: String,
	title: String,
	description: String,
})
</script>
