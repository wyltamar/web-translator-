
let inputTextArea = document.querySelector(".input-text-area");

async function translateText() {
    
   
   let address = "https://api.mymemory.translated.net/get?q=" + inputTextArea.value
                     + "&langpair=pt|en";

    let  response =  await fetch(address)

    let data = await response.json();

    console.log(data);
    
    let translatedText = data.responseData.translatedText;
    console.log(translatedText);

    const container = document.getElementById("translated-text");

    container.innerHTML = `<div class="result"><p>${translatedText}</p></div>`;


}

