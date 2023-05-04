// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //get HTML elements
  let select = document.getElementById('horn-select');
  let hornImage = document.querySelector("img");
  let hornAudio = document.querySelector("audio"); 
  select.addEventListener('change', changeHorn);
  

  // The correct image should display
  // The correct audio sound file should be set
  function changeHorn(){
    if (select.value == "air-horn"){ // air horn
      hornImage.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if (select.value == "car-horn") { //car horn
      hornImage.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if (select.value == "party-horn") { //party horn
      hornImage.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
    } else { // display nothing
      select.src = "assets/images/no-image.png"
    }
  }

  var volume = document.querySelector('input[type="range"]');
  let volumeImage = document.querySelector("div > img");
  volume.addEventListener('input', changeVolume);

  function changeVolume(){
    if(volume.value == 0){ //level 0
      volumeImage.src = "assets/icons/volume-level-0.svg";
      hornAudio.volume = 0;
    }
    else if (volume.value >= 1 &&  volume.value < 33){ //first volume level
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume.value >= 33 &&  volume.value < 67) { //second volume level
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else { //volume level 3
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
    hornAudio.volume = volumeLevel/100; //this element’s volume is not out of 100
  }

let buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', playSound);
  
  function playSound(){
    hornAudio.play();

    if(select.value == "party-horn"){ //add confetti
      const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti()
    }
  }
}