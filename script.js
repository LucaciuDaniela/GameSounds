let allSounds = $(".sound").length;
let animals = [
  "bumblebee",
  "cat",
  "cock",
  "cow",
  "dog",
  "goat",
  "horse",
  "monkey",
];

let sounds = [
  "dj",
  "giggle",
  "kiss",
  "motorcycle",
  "no-no",
  "police",
  "robot",
  "splash",
];

// let arrayOfPathsMusic = [
//   "./sounds/music/shark.mp3",
//   "./sounds/music/bus.mp3",
//   "./sounds/music/happy.mp3",
//   "./sounds/music/wind.mp3",
// ];

for (let i = 0; i < allSounds; i++) {
  $(".sound")[i].addEventListener("click", function () {
    if ($("div").hasClass("animals") == true) {
      function makeSounds(song) {
        let audio = new Audio("./sounds/animals/" + song[i] + ".wav");
        audio.play();
      }
      makeSounds(animals);
      // buttonAnimation(animals[i]);
    } else if ($("div").hasClass("sounds") == true) {
      function makeSounds(song) {
        let audio = new Audio("./sounds/sounds/" + song[i] + ".wav");
        audio.play();
      }
      makeSounds(sounds);
      // buttonAnimation(sounds);
    }
  });
}

let flag = 0;
let music1 = new Audio("./sounds/music/shark.mp3");
let music2 = new Audio("./sounds/music/bus.mp3");
let music3 = new Audio("./sounds/music/happy.mp3");
let music4 = new Audio("./sounds/music/wind.mp3");

$(".sound.shark").on("click", function () {
  if (music1.played && flag == 1) {
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    flag = 0;
  } else if (music2.played || music3.played || music4.played) {
    music2.pause();
    music3.pause();
    music4.pause();
    music1.play();
    flag = 1;
  } else if (flag == 0) {
    music1.play();
    flag = 1;
  }
});

$(".sound.bus").on("click", function () {
  if (music2.played && flag == 1) {
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    flag = 0;
  } else if (music1.played || music3.played || music4.played) {
    music1.pause();
    music3.pause();
    music4.pause();
    music2.play();
    flag = 1;
  } else if (flag == 0) {
    music2.play();
    flag = 1;
  }
});

$(".sound.happy").on("click", function () {
  if (music3.played && flag == 1) {
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    flag = 0;
  } else if (music1.played || music2.played || music4.played) {
    music1.pause();
    music2.pause();
    music4.pause();
    music3.play();
    flag = 1;
  } else if (flag == 0) {
    music3.play();
    flag = 1;
  }
});

$(".sound.wind").on("click", function () {
  if (music4.played && flag == 1) {
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
    flag = 0;
  } else if (music1.played || music2.played || music3.played) {
    music1.pause();
    music2.pause();
    music3.pause();
    music4.play();
    flag = 1;
  } else if (flag == 0) {
    music4.play();
    flag = 1;
  }
});

// $(".sound.shark").on("click", function () {
//   if (flag == 0) {
//     if (!music2.paused || !music3.paused || !music4.paused) {
//       music1.pause();
//     } else {
//       music1.play();
//       flag = 1;
//     }
//   } else if (flag == 1) {
//     music1.pause();
//     flag = 0;
//   }
// });

// audio = new Audio('music.mp3');
// audio.play();

// if(!audio.paused){ //check audio is playing
//  audio.pause();
// }

// $(".sound.bus").on("click", function () {
//   if (flag == 0) {
//     if (!music1.paused || !music3.paused || !music4.paused) {
//       music2.pause();
//     } else {
//       music2.play();
//       flag = 1;
//     }
//   } else if (flag == 1) {
//     music2.pause();
//     flag = 0;
//   }
// });

// $(".sound.happy").on("click", function () {
//   if (flag == 0) {
//     if (!music1.paused || !music2.paused || !music4.paused) {
//       music3.pause();
//     } else {
//       music3.play();
//       flag = 1;
//     }
//   } else if (flag == 1) {
//     music3.pause();
//     flag = 0;
//   }
// });

// $(".sound.wind").on("click", function () {
//   if (flag == 0) {
//     if (!music1.paused || !music2.paused || !music3.paused) {
//       music4.pause();
//     } else {
//       music4.play();
//       flag = 1;
//     }
//   } else if (flag == 1) {
//     music4.pause();
//     flag = 0;
//   }
// });
