import deleteIcon from "./img/trash-can-outline.svg"
import editIcon from "./img/pencil-outline.svg"
import addTaskIcon from "./img/plus-circle.svg"
import { IconButton } from "./iconButton";

import confirmIcon from "./img/check-outline.svg"
import cancelIcon from "./img/cancel.svg"

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

    function _create_delete(projectDiv, projectController, projectData) {
        const _projectDiv = projectDiv;
        const _projectController = projectController;
        const _projectData = projectData

        return function deleteProject() {
            if (projectController) {
                projectController.delete(projectData);
            }
            projectDiv.remove();
        }

    }

    function _create_edit(header) {
        const title = header.firstChild;
        const _header = header;
        return function edit() {
            let fieldValue = title.textContent;
            title.textContent = "";
            const editDiv = document.createElement("div");
            editDiv.classList.add("edit")
            title.appendChild(editDiv);
            const input = document.createElement("input");
            input.classList.add("edit-bar")
            input.value = title.textContent;
            editDiv.appendChild(input);
            editDiv.appendChild(new IconButton(confirmIcon))
            editDiv.appendChild(new IconButton(cancelIcon))
        }
    }

    function create(projectData, projectController) {
        const project = document.createElement("div");
        project.classList.add("project");
        
        const pjHeader = _create_header(projectData);
        project.appendChild(pjHeader);

        const div = document.createElement("div");
        pjHeader.appendChild(div);

        div.appendChild(new IconButton(editIcon, _create_edit(pjHeader)))
        div.appendChild(new IconButton(deleteIcon,_create_delete(project, projectController, projectData)))

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        project.appendChild(taskContainer);

        taskContainer.appendChild(new IconButton(addTaskIcon,null,"New Task"))

        return project
    }

    return {create}
})()