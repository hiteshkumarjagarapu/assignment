let inputElement = document.getElementById("inputElement");
let buttonElement = document.getElementById("saveMe");
let textDiv = document.createElement("div");
textDiv.classList.add("text-div-cont");
document.body.appendChild(textDiv);

buttonElement.onclick = function() {
    let userText = inputElement.value;
    localStorage.setItem("note", (userText));

    let getValue = localStorage.getItem("note");
    if (getValue === null) {

    } else {

        let notePara = document.createElement("p");
        notePara.classList.add("note", );
        textDiv.appendChild(notePara);
        notePara.textContent = getValue;
        inputElement.value = "";
    }

}