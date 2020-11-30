var inputTxt, translateBtn, outputBox

window.onload=function() {
    inputTxt = document.querySelector("#input-txt");
    translateBtn = document.querySelector("#translate-it");
    translateBtn.addEventListener("click", translateMinion);
    outputBox = document.querySelector("#output-text");


	function errorOcc(){
		alert("server is down, please come after an hour");
	}

	function translateMinion(inputHere){
		inputHere = inputTxt.value;
		var url = "https://api.funtranslations.com/translate/ferb-latin.json?text=" + inputHere;
		fetch(url)
			.then(response => response.json())
			.then(json => {
				outputBox.innerText = json.contents.translated;
			})
			.catch(errorOcc);
	}
}
 