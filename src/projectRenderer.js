import deleteIcon from "./img/trash-can-outline.svg"
import editIcon from "./img/pencil-outline.svg"
import addTaskIcon from "./img/plus-circle.svg"
import { IconButton } from "./iconButton";


export const ProjectRenderer = (function() {
    function _create_header(projectData) {
        const project = document.createElement("div");
        project.classList.add("pj-header");
        
        const projectName = document.createElement("div");
        projectName.classList.add("pj-name");
        projectName.textContent = projectData.name;
        project.appendChild(projectName);
        

        const div = document.createElement("div");
        project.appendChild(div);

        div.appendChild(new IconButton(editIcon))
        div.appendChild(new IconButton(deleteIcon))
        
        return project
    }

    function create(projectData) {
        const project = document.createElement("div");
        project.classList.add("project");
        
        const pjHeader = _create_header(projectData);
        project.appendChild(pjHeader);

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        project.appendChild(taskContainer);

        taskContainer.appendChild(new IconButton(addTaskIcon))

        return project
    }

    return {create}
})()