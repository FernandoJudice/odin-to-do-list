export function IconButton(icon,callback) {
    const button = document.createElement("button");
    button.classList.add("icon-button");
    
    const editImg = document.createElement("img");
    editImg.src = icon;
    editImg.classList.add("icon-img");
    button.appendChild(editImg);

    if (!callback) {
        callback = () => alert("not implemented!");
    }

    button.addEventListener("click",callback)

    return button
}