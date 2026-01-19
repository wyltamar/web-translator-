
let inputTextArea = document.querySelector(".input-text-area"); /* Seleciona a área de texto de entrada */
let translatedText = document.querySelector(".translation"); /* Seleciona o elemento onde o texto traduzido será exibido */
let languageSelect = document.querySelector(".language-select"); /* Seleciona o elemento de seleção de idioma */

async function translateText() { 
    
   
   let address = "https://api.mymemory.translated.net/get?q=" + inputTextArea.value
                     + "&langpair=pt|"
                     + languageSelect.value; /* Define o endereço da API de tradução com o texto de 
                                                entrada e os idiomas */

    let  response =  await fetch(address) /* Faz uma requisição para a API de tradução */

    let data = await response.json(); /* Converte a resposta para JSON */

    
    translatedText.textContent = data.responseData.translatedText /* Atualiza o conteúdo do elemento com o texto traduzido */

    

}

