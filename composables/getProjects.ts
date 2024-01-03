import { useProjectStore } from '~/store/ProjectsStore'
import ProjectType from 'types/projectsType'

export const getProjects = async () => {
	const storyblokApi = useStoryblokApi()
	const { data } = await storyblokApi.get('cdn/stories', {
		version: 'draft',
		starts_with: 'projects',
		is_startpage: 0,
	})
	const store = useProjectStore()
	const projectsArray: ProjectType[] = []

	for (const project of data.stories) {
		const { content } = project
		const ProjectData: ProjectType = {
			title: content.title,
			link: content.url.url,
			image: content.Image.filename,
			description: content.description,
			category: content.category,
		}

		projectsArray.push(ProjectData)
		store.addProject(projectsArray)
	}
}
