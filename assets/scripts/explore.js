// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const img = document.querySelector("img");
  const selectElem = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const playButton = document.querySelector("button");

  populateVoiceList();
  if( speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  playButton.addEventListener("click", populateVoiceList);


  function populateVoiceList(){
    var voicesOptions = synth.getVoices();

    for(let i=0; i< voicesOptions.length; i++){
      const newVoice = document.createElement("option")
      // if( voicesOptions[i].default){
      //   newVoice.textContent += "- DEFAULT";
      // }

      // newVoice.setAttribute("data-lang", voicesOptions[i].lang);
      // newVoice.setAttribute("data-name", voicesOptions[i].name);
      // voiceSelector.appendChild(newVoice);
      newVoice.textContent = `${voicesOptions[i].name} (${voicesOptions[i].lang})`;
      newVoice.setAttribute('value', i);
      selectElem.appendChild(newVoice);
    }

  }

  //load in voices
  populateVoiceList();

  
  playButton.addEventListener("click", speak);
  //speak

  function speak(){
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = synth.getVoices();
    const optionSelected = voices[selectElem.value];
    utterance.voice = optionSelected;

    synth.speak(utterance);

    utterance.onstart = function () {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    }
    utterance.onend = function (){
      document.querySelector("img").src = "assets/images/smiling.png";
    }
  }

}