import "./styles.css";
import dogAvatar from "./img/dog-avatar.png";
import { HeaderRenderer } from "./headerRenderer";
import { ProjectData } from "./projectData";
import { ProjectRenderer } from "./projectRenderer";

const header = document.querySelector(".header");
const content = document.querySelector(".content");

header.appendChild(HeaderRenderer.create("@fernandoJudice","Fernando Judice",dogAvatar))

const newProject = new ProjectData("New Project");

content.appendChild(ProjectRenderer.create(newProject))
