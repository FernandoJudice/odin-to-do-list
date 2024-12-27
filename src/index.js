import "./styles.css";
import { HeaderRenderer } from "./headerRenderer";
import dogAvatar from "./img/dog-avatar.png";

const header = document.querySelector(".header");

header.appendChild(HeaderRenderer.create("@fernandoJudice","Fernando Judice",dogAvatar))