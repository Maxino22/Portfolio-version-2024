<template>
	<main>
		<Hero />
		<h2
			class="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9"
		>
			Showcase
		</h2>

		<div
			class="py-8 grid grid-cols-1 grid-rows-2 grid-flow-row sm:grid-rows-1 sm:grid-cols-2 xl:grid-cols-2 justify-between gap-4"
		>
			<internal-card link="/games" title="Games">
				<Icon
					class="text-black dark:text-white"
					name="solar:gamepad-minimalistic-bold-duotone"
				/>
				2 Games
			</internal-card>
			<internal-card link="/projects" title="Projects">
				<Icon
					class="text-black dark:text-white"
					name="solar:medal-ribbon-star-bold-duotone"
				/>
				{{ store.projects.length }} Projects
			</internal-card>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useProjectStore } from '~/store/ProjectsStore'

getProjects()

const store = useProjectStore()

useSchemaOrg([
	definePerson({
		name: 'Maxwell Muhanda',
		sameAs: [
			'https://github.com/Maxino22',
			'https://twitter.com/MaxwellMuhanda',
			'https://www.linkedin.com/in/maxwell-muhanda-5563b316b/',
		],
	}),

	defineWebSite({
		url: 'https://www.maxino.dev',
		name: 'Maxwell Muhanda | Portfolio',
		inLanguage: 'en-US',
	}),
])

useSeoMeta({
	description: 'Portfolio Website, Digital Home & Blog',
	ogUrl: `https://drunkenape.africa/`,
	ogTitle: 'Maxwell Muhanda',
	ogImage: '/favicon-32x32.png',
	twitterCard: 'summary_large_image',
	twitterTitle: 'Maxwell Muhanda',
	twitterDescription: 'Portfolio Website, Digital Home & Blog. Software Developer based in Nairobi, Kenya',
	twitterImage: '/favicon-32x32.png',
})
</script>
