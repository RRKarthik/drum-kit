window.addEventListener("keydown",function(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if(!audio)return;
 console.log(key);
 key.classList.add("playing");
 audio.currentTime = 0;
 audio.play();

});

function endTransition(){
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",endTransition));