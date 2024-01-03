enum ProjectCategory {
	OSS = 'OSS',
	Product = 'products',
	Hobby = 'hobby',
	WebDevelopment = 'web development',
}

interface ProjectType {
	title: string
	link: string
	image: string
	category: ProjectCategory
	description: string
}

export default ProjectType
