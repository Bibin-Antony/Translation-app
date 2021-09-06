var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var inputText = document.querySelector("#input-area");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

console.log(txtInput)
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error)
    alert("hey sorry we are expering some trouble!")
};

function clickEventHandler(){
    var inputText = txtInput.value;//taking input

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            inputText.innerText = translatedText;
        })
        .catch(errorHandler)

};
console.log(json);
btnTranslate.addEventListener("click", clickEventHandler);

