function playSong(songName) {
  
  var audioElement = document.getElementById(songName + "-audio");
  if (audioElement) {
    audioElement.play();
  }
}

function stopSong() {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audioElement => {
      audioElement.pause();

      audioElement.currentTime = 0; 
  });
}

function helpButton() {
  var popup = document.getElementById("help-button");
  popup.classList.toggle("show");
}

function goHome() {
  stopSong();

  const birthdateSection = document.querySelector('.section-birthdate');
  const doodleContainer = document.querySelector('.doodles');
  const help = document.querySelector('.help');
            
  birthdateSection.style.display = 'block';
  doodleContainer.style.display = 'grid';
  help.style.display = 'block';
  

  const songs = document.querySelectorAll('.song');
  songs.forEach(i_song => {
      i_song.style.display = 'none';
  });


  this.style.display = 'none';
}

const songs = document.querySelectorAll('.song');
songs.forEach(i_song => {
    i_song.style.display = 'none';
});

const doodleButtons = document.querySelectorAll('#songButton');
doodleButtons.forEach(doodle => {
    doodle.addEventListener('click', function() {
        const song = this.getAttribute('song-name');
        if (song) {
            
            const sectionBirthdate = document.querySelector('.section-birthdate');
            const doodleContainer = document.querySelector('.doodles');
            const help = document.querySelector('.help');
            
            sectionBirthdate.style.display = 'none';
            doodleContainer.style.display = 'none';
            help.style.display = 'none';
            
            
            const songs = document.querySelectorAll('.song');
            songs.forEach(i_song => {
                i_song.style.display = 'none';
            });
            
            
            const i_song = document.querySelector(`.song.${song.toLowerCase()}`);
            if (i_song) {
                i_song.style.display = 'block';

            }

            playSong(song);

            document.getElementById('home-page').style.display = 'inline-block';
        }
    });
});

document.getElementById("birthdayForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var birthdayInput = document.getElementById("birthday").value;
  var birthdayDate = new Date(birthdayInput);
  var month = birthdayDate.getMonth() + 1;
  var day = birthdayDate.getDate();

  var songName = "";

  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    songName = 'apparat'
  } else if ((month === 11 && day >= 24) || (month === 12 && day <= 21)) {
    songName = 'koktu'
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 23)) {
    songName = 'na-zapade'
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    songName = 'shyraylim'
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    songName = 'do-konsa'
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    songName = 'osoba'
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    songName = 'eighteen'
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    songName = 'jiber'
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    songName = 'safari'
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    songName = 'tsu'
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    songName = 'zaneslo'
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    songName = 'soseni'
  }

  if (songName) {
    songs.forEach(i_song => {
        i_song.style.display = 'none';
    });

    const i_song = document.querySelector(`.song.${songName.toLowerCase()}`);

    playSong(songName);
    if (i_song) {
        i_song.style.display = 'block';
    }

    const doodleContainer = document.querySelector('.section-birthdate');
    const birthdateSection = document.querySelector('.doodles');
    const help = document.querySelector('.help');
            
    if (doodleContainer && birthdateSection && help) {
        doodleContainer.style.display = 'none';
        birthdateSection.style.display = 'none';
        help.style.display = 'none';

        document.getElementById('home-page').style.display = 'inline-block';
    }
  } else {
      console.log("Sorry, no song found for this birthday.");

  }

});


