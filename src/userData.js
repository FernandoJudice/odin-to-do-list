import { ProjectData } from "./projectData";

export function UserData(name,user,avatar) {
    this.name = name;
    this.user = user;
    this.avatar = avatar;
    this.projects = [new ProjectData("New Project")];
}