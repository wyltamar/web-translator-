
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

function hearVoice(){

    let voice = window.webkitSpeechRecognition /* Cria uma nova instância do reconhecimento de voz */
    
    let recognitionVoice = new voice(); /* Inicializa o reconhecimento de voz */

    recognitionVoice.lang = "pt-BR"; /* Define o idioma do reconhecimento de voz */

    recognitionVoice.start(); /* Inicia o reconhecimento de voz */

    recognitionVoice.onresult = (event) => { /* Define o que acontece quando o reconhecimento de voz retorna um resultado */
        let transcript = event.results[0][0].transcript; /* Obtém a transcrição do reconhecimento de voz */
        inputTextArea.value = transcript; /* Atualiza a área de texto de entrada com a transcrição */

        translateText(); /* Chama a função de tradução para traduzir o texto transcrito */
    }
}

