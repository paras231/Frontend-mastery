console.log("js connected");

const canvas = document.getElementById("my_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(context);

//  draw a line
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke()

// draw a circle->

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

//?  drawing text on the canvas->

const text_input = document.getElementById("text_input");
const red_btn = document.getElementById("red_btn");
const purple_btn = document.getElementById("purple_btn");
const file = document.getElementById("file");

function typeText(value, color) {
  console.log(value);
  ctx.fillStyle = color;
  ctx.font = "30px Arial";

  ctx.fillText(value, 5, 50);
}

text_input.oninput = (e) => {
  const value = e.target.value;
  typeText(value, ctx.fillStyle);
};

red_btn.addEventListener("click", (e) => {
  ctx.fillStyle = "red";
  console.log("btn clicked");
  const value = text_input.value;
  typeText(value, ctx.fillStyle);
});

purple_btn.addEventListener("click", () => {
  ctx.fillStyle = "purple";
  console.log("btn clicked");
  const value = text_input.value;
  typeText(value, ctx.fillStyle);
});

function handleDrawImage(e) {
  const url = URL.createObjectURL(e.target.files[0]);
  console.log(url);
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 20, 20);
  };
  img.src = url;
}

file.addEventListener("change", handleDrawImage);
