import { defineStore } from 'pinia'
import ProjectType from 'types/projectsType'

export const useProjectStore = defineStore('project', {
	state: () => ({
		projects: [] as ProjectType[],
	}),
	actions: {
		addProject(projects: ProjectType[]) {
			this.projects = projects
		},
	},

	getters: {
		openSourceProjects: (state) => {
			return state.projects.filter((project) => project.category === 'OSS')
		},
		productProjects: (state) => {
			return state.projects.filter((project) => project.category === 'products')
		},
		webDevelopmentProjects: (state) => {
			return state.projects.filter(
				(project) => project.category === 'web development'
			)
		},
		hobbyProjects: (state) => {
			return state.projects.filter((project) => project.category === 'hobby')
		},
	},
})
