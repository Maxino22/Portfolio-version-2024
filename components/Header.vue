<template>
	<header
		class="w-full sticky top-0 z-20 flex items-center justify-between py-4"
		:class="{
			'border-none': isTop,
			'border-b border-gray-200 dark:border-gray-800': !isTop,
			'bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100': true,
		}"
	>
		<nav
			class="flex items-center justify-between w-full max-w-2xl px-4 mx-auto sm:px-6 xl:max-w-3xl xl:px-0"
		>
			<div class="flex items-center text-base leading-5">
				<div class="hidden sm:block sm:space-x-7">
					<nuxt-link
						v-for="link in navLinks"
						:key="link.title"
						:to="link.link"
						class="font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white capitalize"
					>
						{{ link.title }}
					</nuxt-link>
				</div>
				<div class="flex items-center sm:hidden">
					<MenuButton
						:is-opened="openMenuButton"
						@open-button="toggleMobilebutton"
					/>
				</div>
			</div>
			<ThemeSwitch />
		</nav>
	</header>
	<!-- mobile menu -->
	<div
		class="sm:hidden fixed w-full h-screen right-0 bg-white dark:bg-black z-20 transform ease-in-out duration-500 backdrop-filter bg-opacity-30 dark:bg-opacity-30 backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100"
		:class="{
			'translate-x-0': openMenuButton,
			'-translate-x-full': !openMenuButton,
		}"
	>
		<nav class="h-full mt-8 space-y-8">
			<div v-for="link in navLinks" :key="link.link" class="px-12">
				<nuxt-link
					:to="link.link"
					@click="toggleMobilebutton"
					class="text-xl font-semibold leading-8 tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
					>{{ link.title }}</nuxt-link
				>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
const openMenuButton = ref(false)

const isTop = ref(true)

const onScroll = () => {
	isTop.value = window.scrollY <= 0
}

onMounted(() => {
	window.addEventListener('scroll', onScroll)
})

const toggleMobilebutton = () => {
	openMenuButton.value = !openMenuButton.value
	if (openMenuButton.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
}

const navLinks = [
	{
		link: '/',
		title: 'home',
	},
	{
		link: '/about',
		title: 'About',
	},
	{
		link: '/blog',
		title: 'Blog',
	},
	{
		link: '/projects',
		title: 'Projects',
	},
	{
		link: '/games',
		title: 'Games🎮',
	},
	{
		link: '/uses',
		title: 'Uses',
	},
	{
		link: '/contact',
		title: 'Contact',
	},
]
</script>

<style lang="scss" scoped></style>
