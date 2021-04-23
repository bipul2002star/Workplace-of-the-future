var num = Math.floor(Math.random() * 3) + 1;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `img/dynamicduo${num}.png`, // Background (image path or hex color).
  fg: `img/front.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
