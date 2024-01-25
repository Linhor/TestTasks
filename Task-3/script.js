let state = document.querySelector('#player');
document.querySelector('#player').onclick = PlayPause;
let progress = document.querySelector('#progress');
let timeCode = document.querySelector('#timeCode');
state.ontimeupdate = progressUp;


function PlayPause() {
  console.log('click')
  if (state.classList.contains('pause')) {
    state.classList.remove('pause')
    state.classList.add('play')
    state.play();
  } else {
    if (state.classList.contains('play')) {
      state.classList.remove('play')
      state.classList.add('pause')
      state.pause();
    }
  }
}

state.addEventListener("ended", function () {
  this.src = this.src
});

function progressUp(){
progress.max = state.duration;
progress.value = state.currentTime
let curMin = Math.floor(state.currentTime / 60);
let curSec = Math.floor(state.currentTime - curMin * 60)
let curMmm = Math.floor((state.currentTime - curMin - curSec) * 1000)

if (curMin < 10) {
      curMin = '0' + curMin
    }
    if (curSec < 10) {
          curSec = '0' + curSec;
    }
    if (curMmm < 10) {
         curMmm = curMmm;
        }

timeCode.innerHTML = `${curMin}:${curSec}:${curMmm}`
}