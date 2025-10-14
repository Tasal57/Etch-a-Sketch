const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 100 / size + "%";
  container.style.setProperty("--square-size", squareSize);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

createGrid(16);

const resizeBtn = document.getElementById("resize");
resizeBtn.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"));

  if (Number.isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid size! Enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});



