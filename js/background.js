const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const randemImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${randemImage}`;
bgImage.classList.add("back");

document.body.appendChild(bgImage);

