const inputHtmlElement = document.getElementById("input") as HTMLInputElement;
const buttonHtmlElement = document.getElementById("btn") as HTMLButtonElement;

buttonHtmlElement.addEventListener("click", () => {
  const inputValue = inputHtmlElement.value;
  if (inputValue.trim() === "") {
    alert("Please enter your name");
  } else {
    console.log(inputValue);
  }
});
