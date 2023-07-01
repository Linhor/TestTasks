
let elems = document.querySelectorAll('.draw > div')


const handleClick = (e) => {
  console.log(e.target.classList)
  if (e.target.classList.contains('cir')) {
    console.log('cir')
    e.target.classList.add('pulse')
  } else if (e.target.classList.contains('tri')) {
    e.target.classList.add('rotate')

  }else if (e.target.classList.contains('sqr')){
    e.target.classList.add('move')
  }else if(e.target.classList.contains('rec')){
    e.target.classList.add('def')
  }

}

elems.forEach(elem => {
  elem.addEventListener('click', handleClick)
})