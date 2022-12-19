const textArea = document.querySelector("#evaluatedText");
const letterCount = document.querySelector("#letterCount");
textArea.addEventListener("keyup", calculateLettersCount);

function calculateLettersCount(event) {
  letterCount.innerText = event.target.value.length;
}
