let voices = [];
let selectedVoice = null;
let mode = "normal";

function loadVoices() {
  voices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = loadVoices;

function setVoice(name) {
  selectedVoice = voices.find(v => v.lang.includes("hi")) || voices[0];
  alert(name + " selected");
}

function setMode(type) {
  mode = type;
}

function speak() {
  const text = document.getElementById("text").value;
  if (!text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  utterance.rate = document.getElementById("rate").value;
  utterance.pitch = document.getElementById("pitch").value;

  if (mode === "news") {
    utterance.rate = 0.9;
    utterance.pitch = 0.9;
  }
  if (mode === "emotion") {
    utterance.rate = 0.85;
    utterance.pitch = 1.2;
  }

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}
