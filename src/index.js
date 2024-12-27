import "./styles.css";
import dogAvatar from "./img/dog-avatar.png";
import { HeaderRenderer } from "./headerRenderer";
import { ProjectData } from "./projectData";
import { ProjectRenderer } from "./projectRenderer";
import { UserData } from "./userData";

const header = document.querySelector(".header");
const content = document.querySelector(".content");


const user = new UserData("@fernandoJudice","Fernando Judice",dogAvatar);

header.appendChild(HeaderRenderer.create(user))

const newProject = new ProjectData("New Project");

content.appendChild(ProjectRenderer.create(newProject))
