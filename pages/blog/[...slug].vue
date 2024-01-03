<template>
	<main>
		<Head>
			<Meta name="description" :content="data?.description" />
			<Meta name="og:image" :content="`/images/blog/${data?.cover}`" />
			<Meta name="og:image:width" content="1200" />
			<Meta name="og:image:height" content="630" />
			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="twitter:title" :content="data?.title" />
			<Meta name="twitter:description" :content="data?.description" />
		</Head>
		<div class="flex items-center space-x-3">
			<div
				class="bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center h-8 w-8 p-2"
			>
				<nuxt-link to="/">
					<Icon
						class="text-gray-900 dark:text-gray-200"
						name="solar:home-bold-duotone"
					/>
				</nuxt-link>
			</div>

			<Icon
				class="text-gray-900 dark:text-gray-200"
				name="solar:alt-arrow-right-linear"
			/>

			<nuxt-link>Blog</nuxt-link>

			<Icon
				class="text-gray-900 dark:text-gray-200"
				name="solar:alt-arrow-right-linear"
			/>

			<nuxt-link :to="data?._path">{{ data?.title }}</nuxt-link>
		</div>
		<article>
			<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
				<header class="">
					<p class="my-5">Last updated on {{ data?.date }}</p>
					<page-title>{{ data?.title }}</page-title>
				</header>
				<nuxt-img
					alt=""
					:src="`/images/blog/${data?.cover}`"
					class="rounded-lg object-cover w-full my-8 h-72 xl:h-96"
				></nuxt-img>
				<div class="flex justify-center mt-5 mx-auto">
					<ContentRenderer :value="data" class="prose  dark:prose-h1:text-white dark:prose-h2:text-white dark:prose-h3:text-white dark:prose-a:text-primary-400 my-10" />
				</div>
			</div>
		</article>
	</main>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
	return queryContent<ParsedContent>().where({ _path: path }).findOne()
})

// const script = {
// 	src: 'https://utteranc.es/client.js',
// 	repo: 'https://github.com/Maxino22/MaxinoBlog',
// 	'issue-term': 'pathname',
// 	label: 'Comments',
// 	theme: 'preferred-color-scheme',
// 	crossorigin: 'anonymous',
// 	async: true,
// 	tagPosition: 'bodyClose',
// }

// useHead({
// 	script: [script],
// })
</script>

<style scoped>
.utterances {
	width: 100%;
	margin: 0 !important;
	max-width: 100%;
}
</style>
