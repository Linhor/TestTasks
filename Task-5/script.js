let creator = document.querySelector('#creator');
let blocks = document.querySelectorAll('.block');

const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments)
    }

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms)
  };
}


function Create() {

  if (!creator.classList.contains('done')) {
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].style.opacity = 1;
    }
    creator.classList.toggle('done')
    console.log('create')
  } else {
    console.log('remove')
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].style.opacity = 0;
    }
    creator.classList.toggle('done')
  }
}


Create = debounce(Create, 1000)

creator.addEventListener('click', Create, false)