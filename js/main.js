const randomNumber = Math.round(Math.random() * 10);
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    document.querySelector(
      "h2"
    ).innerHTML = `Parabéns, o número que eu pensei foi ${randomNumber}, você acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = "";
  console.log("cheguei até aqui");
  console.log(inputNumber.value, xAttempts, randomNumber);
  xAttempts++;
}

function handleResetClick(event) {
  toggleScreen();
  inputNumber.value = "";
  xAttempts = 1;
}

function toggleScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}
//events

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
