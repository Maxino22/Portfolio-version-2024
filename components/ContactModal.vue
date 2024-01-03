<template>
	<div
		class="max-w-2xl mx-auto mt-10 w-full p-6 screen flex flex-col items-center border-2 border-solid rounded-lg border-gray-200 dark:border-gray-800"
	>
		<h1 class="text-xl xl:text-3xl py-2">Contact Me</h1>

		<form class="w-full flex flex-col space-y-2">
			<div class="flex space-x-4">
				<div class="flex w-1/2 flex-col space-y-1">
					<div class="flex items-center justify-between">
						<label class="text-gray-800 dark:text-gray-100" for="name"
							>First name*</label
						>
						<span v-if="error && !firstName" class="text-xs text-danger-500"
							>required</span
						>
					</div>
					<input
						placeholder="Your first name"
						class="bg-white dark:bg-black border-2 border-solid text-gray-900 dark:text-gray-100 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-0 focus:outline-none"
						type="text"
						v-model="firstName"
					/>
				</div>
				<div class="flex w-1/2 flex-col space-y-1">
					<div class="flex items-center justify-between">
						<label class="text-gray-800 dark:text-gray-100" for="name"
							>Last name*</label
						>
						<span v-if="error && !lastName" class="text-xs text-danger-500"
							>required</span
						>
					</div>
					<input
						placeholder="Your Last name"
						class="bg-white dark:bg-black border-2 border-solid text-gray-900 dark:text-gray-100 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-0 focus:outline-none"
						type="text"
						v-model="lastName"
					/>
				</div>
			</div>
			<div class="flex w-full flex-col space-y-1">
				<div class="flex items-center justify-between">
					<label class="text-gray-800 dark:text-gray-100" for="name"
						>Email*</label
					>
					<span v-if="error && !email" class="text-xs text-danger-500"
						>required</span
					>
				</div>
				<input
					placeholder="Your Email"
					class="bg-white dark:bg-black border-2 border-solid text-gray-900 dark:text-gray-100 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-0 focus:outline-none"
					type="email"
					v-model="email"
				/>
			</div>
			<div class="flex space-x-4">
				<div class="flex w-1/2 flex-col space-y-1">
					<div class="flex items-center justify-between">
						<label class="text-gray-800 dark:text-gray-100" for="name"
							>Company name</label
						>

						<span class="text-sm text-gray-500">optional</span>
					</div>
					<input
						placeholder="Your company name"
						class="bg-white dark:bg-black border-2 border-solid text-gray-900 dark:text-gray-100 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-0 focus:outline-none"
						type="text"
						v-model="company"
					/>
				</div>
				<div class="flex w-1/2 flex-col space-y-1">
					<div class="flex items-center justify-between">
						<label class="text-gray-800 dark:text-gray-100" for="name">
							Job title</label
						>

						<span class="text-sm text-gray-500">optional</span>
					</div>
					<input
						placeholder="Your job title"
						class="bg-white dark:bg-black border-2 border-solid text-gray-900 dark:text-gray-100 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-0 focus:outline-none"
						type="text"
						v-model="jobTitle"
					/>
				</div>
			</div>
			<p class="text-gray-800 dark:text-gray-100" for="name">
				What can I do for you
			</p>
			<div class="flex items-center space-x-4">
				<div class="w-1/2">
					<div
						class="flex space-x-2 rounded-lg items-center py-3 px-2 bg-white dark:bg-gray-800 border-2 border-solid border-gray-200 dark:border-gray-800"
					>
						<input
							checked
							id="contact"
							class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							type="radio"
							name="propasal"
							value="contact"
							v-model="proposal"
						/>
						<label class="text-gray-800 dark:text-gray-300" for="contact">
							Contact me
						</label>
					</div>
				</div>
				<div class="w-1/2">
					<div
						class="flex space-x-2 rounded-lg items-center py-3 px-2 bg-white dark:bg-gray-800 border-2 border-solid border-gray-200 dark:border-gray-800"
					>
						<input
							id="project"
							class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							type="radio"
							name="propasal"
							value="project"
							v-model="proposal"
						/>
						<label class="text-gray-800 dark:text-gray-300" for="project">
							I have a project
						</label>
					</div>
				</div>
			</div>
			<div class="flex w-full flex-col space-y-1">
				<div class="flex items-center justify-between">
					<label class="text-gray-800 dark:text-gray-100" for="name"
						>What do you want to talk about*</label
					>
					<span v-if="error && !message" class="text-xs text-danger-500"
						>required</span
					>
				</div>

				<textarea
					placeholder="Business opportunity, job offer, tech idea, polite request"
					class="bg-white dark:bg-black border-2 border-solid text-gray-900 dark:text-gray-100 rounded-lg border-gray-200 dark:border-gray-800 focus:ring-0 focus:outline-none py-4"
					v-model="message"
				></textarea>
			</div>

			<p class="text-center text-xs text-gray-600 dark:text-gray-300">
				Information submitted on this form is between you and
				<strong>Maxwell</strong>
			</p>
			<div class="flex items-center justify-center">
				<button
					@click.prevent="submitMessage"
					:disabled="messageSent"
					class="w-1/4 px-4 py-2 my-4 font-semibold text-lg text-white bg-primary-400 dark:bg-primary-600 hover:bg-primary-500 dark:hover:bg-primary-500 rounded"
					:class="messageSent ? 'cursor-not-allowed' : ''"
				>
					<span v-if="!pending && !messageSent">Submit</span>
					<span v-if="pending" class="flex space-x-1 items-center">
						<Icon name="svg-spinners:bars-rotate-fade" />
						<span class="text-white animate-pulse">Sending</span>
					</span>
					<span v-if="messageSent">Sent ✌🏾</span>
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
const mail = useMail()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const company = ref('')
const jobTitle = ref('')
const proposal = ref('')
const message = ref('')

const error = ref(false)
const pending = ref(false)
const messageSent = ref(false)

const submitMessage = async () => {
	if (!firstName.value && !lastName.value && !email.value) {
		error.value = true
	} else {
		pending.value = true
		try {
			await useFetch('/api/contact', {
				method: 'POST',
				body: {
					firstName: firstName.value,
					lastName: lastName.value,
					email: email.value,
					company: company.value,
					jobTitle: jobTitle.value,
					proposal: proposal.value,
					message: message.value,
				},		
			}  )
			 await mail.send({
				from: `${firstName.value} ${lastName.value}`,
				subject: `${proposal.value} - ${email.value}`,
				text: `${message.value}`
			})
			firstName.value = ""
			lastName.value = ""
			email.value = ""
			jobTitle.value =""
			proposal.value =""
			message.value =""
			company.value =""
			pending.value = false
			messageSent.value = true

		} catch (error) {
			console.log(error)
			pending.value = false
		}
	}
}
</script>
