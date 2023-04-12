const songs = [
  {
    track : "song1",
    h1 : "Jhoome jo pathan",
    p : "Arijit singh, Sukriti"
    
  },
  {
    track : "song2",
    h1 : "Kesariya",
    p : "Amit Bhattacharya"
  },
  {
    track : "song3",
    h1 : "Show me thumka",
    p : "shasvat singh"
  },
  {
    track : "song4",
    h1 : "Tere pyar meain",
    p : "Arijit singh"
  }
]


const img = document.querySelector("img");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const music = document.querySelector("audio");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");

let isPlaying = false;
function playMusic() {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("rotate");
}

const pauseMusic =  () => {
isPlaying = false
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("rotate");
};

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();

    }else{
        playMusic();
    }
})


const loadsong = (songs)=>{
  h1.textContent = songs.h1;
  p.textContent = songs.p;
  music.src = "mp3/"+songs.track+ ".mp3";
  img.src = "img/"+ songs.h1 + ".jpg"
}

songsIndex=0;


const nextSong = ()=>{
  songsIndex = (songsIndex + 1) % songs.length;
  loadsong(songs[songsIndex]);
  playMusic();

}
const prevSong = ()=>{
  songsIndex = (songsIndex - 1 + songs.length) % songs.length;
  loadsong(songs[songsIndex]);
  playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
