const coords = { x: 0, y: 0 };
const stars = document.querySelectorAll(".stars");

stars.forEach(function (star) {
  star.x = 0;
  star.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

  animateStars();
});

function animateStars() {
  let x = coords.x;
  let y = coords.y;

  stars.forEach(function (star, index) {
    star.style.left = x - 12 + "px";
    star.style.top = y - 12 + "px";

    star.style.scale = (stars.length - index) / stars.length;

    star.x = x;
    star.y = y;

    const nextStar = stars[index + 1] || stars[0];
    x += (nextStar.x - x) * 0.3;
    y += (nextStar.y - y) * 0.3;
  });
}
