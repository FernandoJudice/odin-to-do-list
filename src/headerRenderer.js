export const HeaderRenderer = (function() {
    function create(user,name,avatar) {
        const greetings = document.createElement("div");
        greetings.classList.add("greetings");
        const img = document.createElement("img");
        img.src = avatar;
        greetings.appendChild(img);
        const div = document.createElement("div");
        greetings.appendChild(div);
        const gtUser = document.createElement("div");
        gtUser.classList.add("gt-user");
        gtUser.textContent = user;
        div.appendChild(gtUser);
        const gtName = document.createElement("div");
        gtName.classList.add("gt-name");
        gtName.textContent = name;
        div.appendChild(gtName);
        return greetings
    }

    return {create}
})()