import deleteIcon from "./img/trash-can-outline.svg"
import editIcon from "./img/pencil-outline.svg"
import addTaskIcon from "./img/plus-circle.svg"
import { IconButton } from "./iconButton";
import { createEditRequest } from "./editRequest";

export const ProjectRenderer = (function() {
    function _create_header(projectData) {
        const project = document.createElement("div");
        project.classList.add("pj-header");
        
        const projectName = document.createElement("div");
        projectName.classList.add("pj-name");
        projectName.textContent = projectData.name;
        project.appendChild(projectName);
        
        return project
    }

    function _create_delete(projectDiv, callback) {
        return function deleteProject() {
            if (callback) {
                callback();
            }
            projectDiv.remove();
        }

    }

    function create(projectData, projectController) {
        const project = document.createElement("div");
        project.classList.add("project");
        
        const pjHeader = _create_header(projectData);
        project.appendChild(pjHeader);

        const div = document.createElement("div");
        pjHeader.appendChild(div);

        div.appendChild(new IconButton(editIcon, createEditRequest(pjHeader.firstChild, projectController.createUpdateName(projectData))))
        div.appendChild(new IconButton(deleteIcon,_create_delete(project, projectController.createDelete(projectData))))

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        project.appendChild(taskContainer);

        taskContainer.appendChild(new IconButton(addTaskIcon,null,"New Task"))

        return project
    }

    return {create}
})()