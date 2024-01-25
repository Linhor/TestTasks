function RandomGame() {

  let table = document.querySelector('.table');

  let RandomNum = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }


  let colorize = function () {
    let color = RandomNum(0, 9999);
    return '#' + color;
  }

  console.log(colorize())
  let createSqr = function (parent) {
    let sqr = document.createElement('div');
    sqr.classList.add('sqr');
    sqr.style.backgroundColor = colorize();
    parent.appendChild(sqr);
  }

  let renderSqr = function () {
    let count = RandomNum(10, 100);
    for (let i = 0; i < count; i++) {
      createSqr(table);
    }
  };
  renderSqr();
};
RandomGame();