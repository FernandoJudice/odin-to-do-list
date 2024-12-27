export function ProjectController(projects) {
    this.projects = projects;

    this.createDelete = (projectData) => {
        return function deleteData() {
            let index = projects.indexOf(projectData);
            if (index>=0) {projects.splice(index,1)};
            console.log(projects);
        }
    }

    this.createUpdateName = (projectData) => {
        return function updateName (newName) {
            projectData.name = newName;
            console.log(projects);
        }
    }
}