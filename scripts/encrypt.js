


//Function to check if there is a upper case letter in the string.
function checkCapitalLetter(text){
       
    return /[A-Z]/.test(text);

};

//Function to check if there is a number in the string.
function checkNumbers(text){

    return /[0-9]/.test(text);

};

//Function to check if there is a character in the string.
function checkCharacters(text){

    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text);

};

//Function to check if there is a accent letter in the string.
function checkAccentLetters(text){

    return /[á-ú,Á-Ú,ä-ü,Ä-Ü,à-ù,À-Ù,â-û,Â-Û,ãõÃÕåÅæÆœŒçÇðÐøØ]/.test(text);

};

//Function to replace all vowels of the sentence for the encrypted vowels.
function encryptAllVowels(text){

    return text.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
};

//Function to replace all encrypted vowels of the sentence for the normal vowels.
function desencryptAllVowels(text){

    return text.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
};

//Function to encrypt the sentence.
function encrypt() {

	var text = document.getElementById("encryptText").value;
    var image = document.getElementById("imageArea");
    var area = document.getElementById("showEncryptText");
    var button = document.getElementById("copyButton");

	if (checkCapitalLetter(text) || checkNumbers(text) || checkCharacters(text) || checkAccentLetters(text)) {

        alert("Error");

    } else {

        var text_changed = encryptAllVowels(text);
        image.style.display = "none"
        area.removeAttribute("hidden");
        button.removeAttribute("hidden");
        area.value = text_changed;   

    }

};

//Function to desencrypt the sentence.
function desencrypt() {

	var text = document.getElementById("encryptText").value;
    var image = document.getElementById("imageArea");
    var area = document.getElementById("showEncryptText");
    var button = document.getElementById("copyButton");

	if (checkCapitalLetter(text) || checkNumbers(text) || checkCharacters(text) || checkAccentLetters(text)) {

        alert("Error");

    } else {

        var text_changed = desencryptAllVowels(text);
        image.style.display = "none"
        area.removeAttribute("hidden");
        button.removeAttribute("hidden");
        area.value = text_changed;    

    }

}

//Function to copy the sentence of the area where the encrypt/desencrypt text is.
function copyText() {

	var copyText = document.getElementById("showEncryptText");
	copyText.select();
	copyText.setSelectionRange(0,99999);

	navigator.clipboard.writeText(copyText.value);

	alert("Texto copiado")

}
