var btnTranslate = document.getElementById("btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
   outputDiv.innerText = "abccc" + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);
