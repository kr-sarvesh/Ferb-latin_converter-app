var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serverUrl = 'https://api.funtranslations.com/translate/chef.json';

var getTranslationUrl = (text) => {
  return serverUrl + '?' + 'text=' + text;
};

var clickHandler = (e) => {
  var inputText = txtInput.value;
  fetch(getTranslationUrl(inputText))
    .then((Response) => Response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    });
};

btnTranslate.addEventListener('click', clickHandler);
