import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
	const prisma = new PrismaClient()
	const { firstName, lastName, email, company, jobTitle, proposal, message } =
		await readBody(event)
	await prisma.contact.create({
		data: {
			first_name: firstName,
			last_name: lastName,
			email: email,
			company: company,
			job_title: jobTitle,
			proposal: proposal,
			message: message,
		},
	})

	return {
		statusCode: 200,
		body: {
			success: true,
			message: 'Contact created successfully',
		},
	}
})
