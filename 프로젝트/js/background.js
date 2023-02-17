const images = [
  "ndg1.jpg",
  "ndg2.jpg",
  "ndg3.jpg",
  "ndg4.jpg",
  "ndg5.jpg",
  "ndg6.jpg",
  "ndg7.jpg",
  "ndg8.jpg",
  "ndg9.jpg",
  "ndg10.jpg"
];

function printRandomBackgroundImg() {
  const randomBackgroundImg = images[Math.floor(Math.random() * images.length)];
  // const randomBackgroundImgNumber = Math.floor(Math.random() * images.length);
  // const randomBackgroundImg = `ndg${randomBackgroundImgNumber}.jpg`;
  const bgImg = document.createElement("img");

  bgImg.src = `images/ndg_bg/${randomBackgroundImg}`;
  bgImg.id = 'background-image';
  bgImg.width = '100';
  document.body.appendChild(bgImg);
}

printRandomBackgroundImg();
// setInterval(printRandomBackgroundImg, 1000);