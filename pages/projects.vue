<template>
	<main>
		<div class="pt-6 pb-8 space-y-2 md:space-y-5">
			<page-title>Projects</page-title>
		</div>

		<h2
			class="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9"
		>
			Open Source
		</h2>
		<p class="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
			My journey in open sources starts with
		</p>
		<div class="container py-12">
			<div class="flex flex-wrap -m-4">
				<ExternalCard
					v-for="project in store.openSourceProjects"
					:title="project.title"
					:image="project.image"
					:description="project.description"
					:link="project.link"
					:key="project.title"
				/>
			</div>
		</div>

		<h2
			class="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9"
		>
			Products
		</h2>
		<p class="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
			Sass Products I have helped launch
		</p>
		<div class="container py-12">
			<div class="flex flex-wrap -m-4">
				<ExternalCard
					v-for="project in store.productProjects"
					:title="project.title"
					:image="project.image"
					:description="project.description"
					:link="project.link"
					:key="project.title"
				/>
			</div>
		</div>
		<h2
			class="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9"
		>
			Web Development
		</h2>
		<p class="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
			Web Dev clients i have worked with 💚
		</p>
		<div class="container py-12">
			<div class="flex flex-wrap -m-4">
				<ExternalCard
					v-for="project in store.webDevelopmentProjects"
					:title="project.title"
					:image="project.image"
					:description="project.description"
					:link="project.link"
					:key="project.title"
				/>
			</div>
		</div>

		<h2
			class="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9"
		>
			Hobby projects
		</h2>
		<p class="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
			Projects I built for my hobbies or personal needs
		</p>
		<div class="container py-12">
			<div class="flex flex-wrap -m-4">
				<ExternalCard
					v-for="project in store.hobbyProjects"
					:title="project.title"
					:image="project.image"
					:description="project.description"
					:link="project.link"
					:key="project.title"
				/>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useProjectStore } from '~/store/ProjectsStore'

getProjects()

const store = useProjectStore()

useSeoMeta({
	description: 'CSome Projects I have worked on',
})
</script>

<style scoped></style>
