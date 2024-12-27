import "./styles.css";
import dogAvatar from "./img/dog-avatar.png";
import { HeaderRenderer } from "./headerRenderer";
import { ProjectRenderer } from "./projectRenderer";
import { UserData } from "./userData";
import { ProjectController } from "./projectController";

const header = document.querySelector(".header");
const content = document.querySelector(".content");


const user = new UserData("@fernandoJudice","Fernando Judice",dogAvatar);

header.appendChild(HeaderRenderer.create(user))

const projectController = new ProjectController(user.projects);

content.appendChild(ProjectRenderer.create(user.projects[0],projectController))
