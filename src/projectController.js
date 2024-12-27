export function ProjectController(projects) {
    this.projects = projects;

    this.delete = (projectData) => {
        let index = projects.indexOf(projectData);
        if (index>0) {projects.splice(index,1)};
    }

    this.updateName = (projectData,newName) => {
        projectData.name = newName;
        console.log(projects);
    }
}