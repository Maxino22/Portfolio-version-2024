<template>
	<!-- <SignInModal /> -->
	<main>
		<page-title>Play Games</page-title>
		<p class="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
			not a game dev just fun with JavaScript
		</p>

		<div class="my-3 flex space-x-12 items-center">
			<nuxt-link
				to="/games/snake"
				class="flex flex-col space-y-2 cursor-pointer"
			>
				<nuxt-img class="h-20 w-20" src="../public/images/snake.png"></nuxt-img>
				<p class="text-center font-semibold">Snake</p>
			</nuxt-link>
			<nuxt-link
				to="/games/chess"
				class="flex flex-col space-y-2 cursor-pointer"
			>
				<nuxt-img class="h-20 w-20" src="../public/images/chess.png"></nuxt-img>
				<p class="text-center font-semibold">Chess</p>
			</nuxt-link>
		</div>
		<!-- <LoginView /> -->
	</main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
