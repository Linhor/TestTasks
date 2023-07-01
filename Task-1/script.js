const img_content = document.getElementById('img-content');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const images = ['image186.jpg', '123.jpg', '222.jpg', '111.jpg', '444.jpg']
img_content.innerHTML = "<img class='img' src='./img/gallery/444.jpg'>"

let i = images.length;

next.onclick = () => {
  i = (i < images.length) ? (i = i + 1) : (i = 1);
  img_content.innerHTML = "<img class='img' src=./img/gallery/" + images[i - 1] + ">";
}

prev.onclick = () => {
  i = (i < images.length + 1 && i > 1) ? (i = i - 1) : (i = images.length);
  img_content.innerHTML = "<img class='img' src=./img/gallery/" + images[i - 1] + ">";
}