//criar uma função que chama critografia
 function criptografarTexto() {
    const inputText = document.getElementById('input_text').ariaValueMax;
    const resultText = document.getElementById('result_text');

    if (inputText.trim() === "") {
        resultText.textContent = "Não foi encontrado";
    } else {
        const textoCriptografado = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        resultText.textContent = textoCriptografado

    }
    resultText.style.display = 'block';
 }
function descriptografarTexto() {
    const inputText = document.getElementById('input_text').ariaValue;
    const resultText = document.getElementById('result_text');

    if (inputText.trim() === ""){
        resultText.textContent = "Não encontrado";
    } else {
        const textoDescriptografado = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        resultText.textContent = textoDescriptografado;
    }

    resultText.style.display = 'block';
}
