<template>
	<div class="bg-white dark:bg-black">
		<div class="min-h-screen overflow-hidden">
			<Header />
			<div class="flex flex-col mx-auto container max-w-4xl">
				<slot />
				<Footer />
			</div>
		</div>
	</div>
</template>
