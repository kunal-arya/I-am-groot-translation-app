var userInput = document.querySelector("#input-text")
var buttonTranslate = document.querySelector("#btn-translate")
var userOutput = document.querySelector("#userOutput")

var serverUrl = "https://api.funtranslations.com/translate/groot.json"

function changeMyUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error Occured", error )
  alert("Sorry!! you can only translate 5 sentences per Hour. Try again After 1 Hour")
}

function clickHandler(){
var inputUser = userInput.value
    fetch(changeMyUrl(inputUser))
    .then(changeResponse => changeResponse.json())
    .then(changedResponse => {
        var finalOutput = changedResponse.contents.translated;
        userOutput.innerText = finalOutput;
    } )
    .catch(errorHandler)
}

buttonTranslate.addEventListener("click" ,clickHandler)