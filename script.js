const colors = document.querySelectorAll(".colors");
const body = document.querySelector("body");

colors.forEach((color) => {
  color.addEventListener("click", (c) => {
    if (c.target.id === "grey") {
      console.log(c);
      body.style.backgroundColor = "grey";
    } else if (c.target.id === "white") {
      body.style.backgroundColor = "#fff";
    } else if (c.target.id === "orange") {
      body.style.backgroundColor = "#FFA500";
    } else {
      body.style.backgroundColor = "green";
    }
  });
});
