import deleteIcon from "./img/trash-can-outline.svg"
import editIcon from "./img/pencil-outline.svg"


export const ProjectRenderer = (function() {
    function create(projectData) {
        const project = document.createElement("div");
        project.classList.add("project");
        
        const projectName = document.createElement("div");
        projectName.classList.add("pj-name");
        projectName.textContent = projectData.name;
        project.appendChild(projectName);
        

        const div = document.createElement("div");
        project.appendChild(div);

        const editButton = document.createElement("button");
        editButton.classList.add("icon-button");
        div.appendChild(editButton);

        const editImg = document.createElement("img");
        editImg.src = editIcon;
        editImg.classList.add("icon-img");
        editButton.appendChild(editImg);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("icon-button");
        div.appendChild(deleteButton);

        const deleteImg = document.createElement("img");
        deleteImg.src = deleteIcon;
        deleteImg.classList.add("icon-img");
        deleteButton.appendChild(deleteImg);
        
        return project
    }

    return {create}
})()