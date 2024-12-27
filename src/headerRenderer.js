export const HeaderRenderer = (function() {
    function create(user) {
        const greetings = document.createElement("div");
        greetings.classList.add("greetings");
        const img = document.createElement("img");
        img.src = user.avatar;
        greetings.appendChild(img);
        const div = document.createElement("div");
        greetings.appendChild(div);
        const gtUser = document.createElement("div");
        gtUser.classList.add("gt-user");
        gtUser.textContent = user.user;
        div.appendChild(gtUser);
        const gtName = document.createElement("div");
        gtName.classList.add("gt-name");
        gtName.textContent = user.name;
        div.appendChild(gtName);
        return greetings
    }

    return {create}
})()