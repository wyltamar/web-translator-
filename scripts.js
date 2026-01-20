/**
 * Script para tradução de texto e reconhecimento de voz
 * Utiliza a API MyMemory para tradução e a Web Speech API para reconhecimento de voz
 * Autor: Wyltamar Oliveira
 * Data: 2026-01-19 
 * Version: 1.1 
 * 
 */


/* Seleção dos elementos HTML necessários */ 

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

/* Função para verificar se há texto na área de entrada e habilitar/desabilitar o botão de tradução */
function verifyInput(){
    if(inputTextArea.value.trim() !== ""){
        /* Habilitar o botão de tradução */
        document.querySelector(".translate-button").disabled = true;
    } else {
        /* Desabilitar o botão de tradução */
        document.querySelector(".translate-button").disabled = false;
    }
}

function clearText(){
    inputTextArea.value = ""; /* Limpa a área de texto de entrada */
    translatedText.textContent = ""; /* Limpa o texto traduzido */
    document.querySelector(".translate-button").disabled = true; /* Desabilita o botão de tradução */
}

