console.log("js connected");

const canvas = document.getElementById("my_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
console.log(ctx);

//?  drawing text on the canvas->

const text_input = document.getElementById("text_input");
const red_btn = document.getElementById("red_btn");
const purple_btn = document.getElementById("purple_btn");
const file = document.getElementById("file");
const save = document.getElementById("save");

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
  //  first create a blob url of chosen file from input type image
  const url = URL.createObjectURL(e.target.files[0]);
  console.log(url);
  //  create a new image object
  const img = new Image();
  // runs a function when image is loaded->
  img.onload = function () {
    // center the image on canvas
    let wrh = img.width / img.height;
    let newWidth = canvas.width;
    let newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * wrh;
    }
    let xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
    let yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
    ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
    ctx.font = "30px Arial";
    ctx.fillText(text_input.value, 10, 10);
  };
  //  finally set the image src to url
  img.src = url;
}

file.addEventListener("change", handleDrawImage);



  save.setAttribute('download', 'MintyPaper.png');
  save.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  save.click();