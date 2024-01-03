<template>
	<div class="bg-white dark:bg-black">
		<Header />

		<SectionContainer>
			<div class="flex flex-col min-h-screen">
				<slot />
			</div>
			<Footer />
		</SectionContainer>
	</div>
</template>
