import confirmIcon from "./img/check-outline.svg"
import cancelIcon from "./img/cancel.svg"
import { IconButton } from "./iconButton";

export function createEditRequest(field,callback) {
    let originalValue = field.textContent;

    function create_cancel(editBar) {

        return function cancel() {
            editBar.remove();
            field.textContent = originalValue;
        }
    }

    function create_confirm(input, editBar) {
        return function confirm() {
            originalValue = input.value
            if (callback) {
                callback(originalValue)
            }
            field.textContent = originalValue;
            editBar.remove();
        }
    }

    return function edit() {
        field.textContent = "";
        const editDiv = document.createElement("div");
        editDiv.classList.add("edit")
        field.appendChild(editDiv);
        const input = document.createElement("input");
        input.classList.add("edit-bar")
        input.value = originalValue;
        editDiv.appendChild(input);
        editDiv.appendChild(new IconButton(confirmIcon, create_confirm(input, editDiv)))
        editDiv.appendChild(new IconButton(cancelIcon, create_cancel(editDiv)))
    }
}