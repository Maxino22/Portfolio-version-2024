<template>
	<div
		class="flex flex-col justify-around items-center w-full h-content sm:h-content-sm"
	>
		<h1
			class="flex flex-col lg:flex-row sm:my-4 text-center select-none text-7xl sm:text-8.5xl leading-none tracking-tightest font-extrabold"
		>
			<span
				data-content="Dream."
				class="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1"
			>
				<span
					class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"
				>
					Dream.
				</span>
			</span>
			<span
				data-content="Code."
				class="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-2"
			>
				<span
					class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"
				>
					Code.
				</span>
			</span>
			<span
				data-content="Deploy."
				class="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-3"
			>
				<span
					class="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"
				>
					Deploy.
				</span>
			</span>
		</h1>
		<div class="space-y-2 md:space-y-5 px-5 sm:px-0">
			<page-title>
				Hi There I'm Maxwell
				<span role="img" aria-label="waving hand" class="wave"> 👋🏾 </span>
			</page-title>
			<p>
				full stack developer with a strong passion in web and Open Source
				technology
				<nuxt-link
					title="contact"
					class="font-medium leading-6 text-"
					aria-label="Link to contact"
					to="/contact"
				>
					Get in touch &rarr;
				</nuxt-link>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
