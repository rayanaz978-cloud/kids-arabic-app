function playSound(letter) {
  const audio = new Audio(`assets/sounds/${letter}.mp3`);
  audio.play();
}

// إخفاء الدعاء بعد 3 ثوانٍ
window.onload = function () {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 3000); // 3000 = 3 ثوانٍ
};
