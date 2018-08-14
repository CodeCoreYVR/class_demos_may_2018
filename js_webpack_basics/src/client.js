import "./scriptA";
import "./scriptB";

import "./css/main.css";

// Importing images will only work if
// "file-loader" is installed and setup.
// When importing an image, you will receive
// the final URL path to the image by default.
// You can use this path with DOM manipulation
// or React to place images on the page.
import sovietBearPath from "./images/sovietBear.png";
import redPandaPath from "./images/redPanda.gif";

console.log("Hello, World!");
console.log(sovietBearPath);

document.addEventListener("DOMContentLoaded", () => {
  const sovietBearImg = document.createElement("img");
  sovietBearImg.src = sovietBearPath;

  const redPandaImg = document.createElement("img");
  redPandaImg.src = redPandaPath;

  const title = document.createElement("h1");
  title.innerText = "Welcome to Webpack!";

  document.body.prepend(title);
  document.body.append(sovietBearImg, redPandaImg);
});
