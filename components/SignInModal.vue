<template>
	<div id="hero" class="">
		<div
			class="relative flex flex-col items-center space-y-2 justify-items-center xl:space-y-0 bg-black p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800 hover:border-primary-600 dark:hover:border-primary-400"
		>
			<Icon
				size="20"
				class="text-black dark:text-white absolute top-2 right-3 cursor-pointer"
				name="radix-icons:cross-2"
			/>
			<div class="p-8 prose dark:prose-dark max-w-none">
				<div class="flex flex-col items-center justify-between gap-4">
					<p class="text-center sm:text-left">
						Sign in with one of these providers:
					</p>

					<button
						class="h-12 w-48 px-3 rounded-lg p-0 shadow-lg bg-white dark:bg-white justify-between flex items-center"
					>
						<Icon name="logos:google-icon"></Icon>
						<p class="text-gray-600 dark:text-gray-900">Sign in with Google</p>
					</button>
					<button
						class="h-12 w-48 px-3 rounded-lg p-0 shadow-lg bg-white dark:bg-white justify-between flex items-center"
					>
						<Icon name="logos:github-icon"></Icon>
						<p class="text-gray-600 dark:text-gray-900">Sign in with Github</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue';

// import { useCurrentUser, useFirebaseAuth } from 'vuefire'
// import {
// 	GithubAuthProvider,
// 	GoogleAuthProvider,
// 	signInWithRedirect,
// } from 'firebase/auth'
// const router = useRouter()
// const auth = useFirebaseAuth()!
// const googleAuthProvidor = new GoogleAuthProvider()

// const signInWithGoogle = async () => {
// 	await signInWithRedirect(auth, googleAuthProvidor)
// 	router.push('/games')
// }

onBeforeMount(() => {
	document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
	document.body.style.overflow = ''
})


</script>

<style>
#hero {
	position: absolute;
	inset: 0;
	display: grid;
	place-content: center;
	z-index: 50;
	backdrop-filter: blur(5px); /* Apply the blur effect */
}
</style>
