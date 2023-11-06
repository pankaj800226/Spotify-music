const music = document.querySelector("audio");
const img = document.getElementById("img");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

// console.log(artist);

const songs = [
  {
    name: "pankaj-1",
    title: "To Phir Aao",
    artist: "Mustafir",
  },

  {
    name: "pankaj-2",
    title: "Amplifire",
    artist: "Emran Khan",
  },

  {
    name: "pankaj-3",
    title: "Tu hai kaha",
    artist: "Uraan",
  },

  {
    name: "pankaj-4",
    title: "Desi Kalakar",
    artist: "Honny Singh",
  },

  {
    name: "pankaj-5",
    title: "Hairaani-Love",
    artist: "Arijit Singh",
  },

  {
    name: "pankaj-6",
    title: "Enna Sona",
    artist: "Arijit Singh",
  },

  {
    name: "pankaj-7",
    title: "Intezaar",
    artist: "Shreya Ghoshal",
  },

  {
    name: "pankaj-8",
    title: "Raan Ankhein",
    artist: "Arijit Singh",
  },

  {
    name: "pankaj-9",
    title: "jay-Jaykara",
    artist: "Bahubali",
  },

  {
    name: "pankaj-10",
    title: "Zara Thehro",
    artist: "Armaan malik",
  },
];

let isPlaying = false;
//play song function
const PlaySong = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");

};

//pause song function
const PauseSong = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
};
//click play button function
play.addEventListener("click", () => {
  if (isPlaying) {
    PauseSong();
  } else {
    PlaySong();
  }
});

//change the music data
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `media/${songs.name}.jpg`;
};
// loadSong(songs[4])

let songIndex = 0;
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  PlaySong();
};

//prevSong function
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  PlaySong();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
