<template>
  	<div class="sm:hidden mt-24 text-center">
		<page-title>Games are only available on larger screens</page-title>
	</div>

	<div
		class="hidden md:block relative w-full bg-secondaryGreen rounded-lg   h-auto lg:max-h-[70%] my-12"
	>
  <TheChessboard />

	</div>
</template>

<script setup lang="ts">
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';
</script>