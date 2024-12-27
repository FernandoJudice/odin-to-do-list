import deleteIcon from "./img/trash-can-outline.svg"
import editIcon from "./img/pencil-outline.svg"
import { IconButton } from "./iconButton";


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

        div.appendChild(new IconButton(editIcon))
        div.appendChild(new IconButton(deleteIcon))
        
        return project
    }

    return {create}
})()