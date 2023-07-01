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

//return to start pic of video
state.addEventListener("ended", function () {
  this.src = this.src
});

//time line progress
function progressUp() {
  d = state.currentTime
  progress.max = state.duration;
  progress.value = state.currentTime;
  let min = Math.floor(state.currentTime / 60)
  if (min < 10) {
    min = '0' + min
  }
  let sec = Math.floor(state.currentTime % 60)
  if (sec < 10) {
    sec = '0' + sec;
  }

  timeCode.innerHTML = `${min}:${sec}`
}