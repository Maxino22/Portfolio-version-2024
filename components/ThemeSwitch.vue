<template>
	<div class="flex items-center space-x-1">
		<div @click="toggleTheme" class="cursor-pointer flex items-center w-12 h-6">
			<Icon
				size="20"
				v-if="colorMode.preference == 'dark' || 'system'"
				class="text-white"
				name="solar:sun-2-bold"
			/>
			<Icon
				size="20"
				v-if="colorMode.preference == 'light' || 'system'"
				class="text-black"
				name="solar:moon-bold"
			/>
		</div>
		<Icon
			@click="colorMode.preference = 'system'"
			size="20"
			v-if="colorMode.preference == 'light' || 'system'"
			:class="colorMode.preference == 'dark' ? 'text-white' : 'text-gray-900'"
			name="solar:monitor-bold-duotone"
		/>
	</div>
</template>

<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
const toggleTheme = () => {
	if (colorMode.preference == 'dark') {
		// Logic to enable dark theme
		colorMode.preference = 'light'
	} else {
		// Logic to enable light theme
		colorMode.preference = 'dark'
	}
}
</script>
