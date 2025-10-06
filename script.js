const contaniner = document.getElementById("container")


function createGrid(size) {
    contaniner.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const sqaure = document.createElement("div");
        sqaure.classList.add("square");
        contaniner.appendChild(sqaure);
    }



}

createGrid(16)