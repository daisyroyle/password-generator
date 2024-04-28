const generateButton = document.querySelector(".button--generate");
const passwordInput = document.querySelector(".password");

console.log(passwordInput);

generateButton.addEventListener("click", () => {
  console.log("clicked button");
  updatePassword();
});

function updatePassword() {
  passwordInput.value = passwordInput.value + "!";
}