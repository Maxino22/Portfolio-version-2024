<template>
	<div class="sm:hidden mt-24 text-center">
		<page-title>Games are only available on larger screens</page-title>
	</div>

	<div
		class="hidden md:block relative w-full bg-secondaryGreen rounded-lg shadow-lg shadow-accentGreen border h-auto lg:max-h-[70%] my-12 border-lines"
	>
		<div class="grid grid-cols-5 gap-4 space-x-4 p-10">
			<GameContainer v-on:update:score="updateScore" class="col-span-3" />
			<GameControls :score="score" class="col-span-2" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const score = ref(0)

function updateScore(newscore) {
	score.value = newscore
}
</script>
