const maxNumber = document.querySelector("#setting");
const maxNumberInput = document.querySelector("#setting input");
const userNumber = document.querySelector("#user");
const userNumberInput = document.querySelector("#user input");

function handleinput(event) {
  event.preventDefault();
  const number = maxNumberInput.value;
  const randomNumber = Math.abs(Math.ceil(Math.random() * number));
  const userSetNumber = parseInt(userNumberInput.value, 10);
  const resultMsg = document.querySelector("#resultmsg");
  const Msg = document.querySelector("#resultmsg span");
  resultMsg.classList.remove("hidden");
  const inputResult = document.querySelector("#resultmsg h4");
  inputResult.innerHTML = `You chose: ${userSetNumber}, the machine chose: ${randomNumber}.`;
  userSetNumber === randomNumber
    ? (Msg.innerHTML = "You Won!")
    : (Msg.innerHTML = "You Lost!");
}

userNumber.addEventListener("submit", handleinput);
