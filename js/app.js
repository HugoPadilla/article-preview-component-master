const buttonShare = document.getElementById("button-share");

const shareOptions = document.getElementById("share-options");

buttonShare.addEventListener("click", () => {
  shareOptions.classList.toggle("share-options-hidden")
});
