var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var errorDiv = document.querySelector("#error-handler");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}
function errorHandler(error) {
    document.getElementById("error-handler").style.visibility = "visible"; 
    errorDiv.innerText  = "an error occurred => "+ error;
}
btnTranslate.addEventListener("click", function clickEventHandler() {
    var inputText = textInput.value;
    //calling server for functioning
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler)
});