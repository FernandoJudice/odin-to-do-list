export function IconButton(icon,callback, label) {
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

    if (label) {
    const buttonLabel = document.createElement("div");
    buttonLabel.classList.add("std-text");
    buttonLabel.textContent = label;
    button.appendChild(buttonLabel);
    }

    return button
}