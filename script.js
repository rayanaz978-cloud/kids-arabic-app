function playSound(letter) {
  const audio = new Audio(`assets/sounds/${letter}.mp3`);
  audio.play();
}
