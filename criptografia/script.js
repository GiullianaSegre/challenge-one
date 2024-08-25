function criptografar(texto) {
    texto = texto.toLowerCase().replace(/[^a-z\s]/g, "");
    texto = texto.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
    return texto;
}

function descriptografar(textoCriptografado) {
    textoCriptografado = textoCriptografado.replace(/enter/g, "e")
                                           .replace(/imes/g, "i")
                                           .replace(/ai/g, "a")
                                           .replace(/ober/g, "o")
                                           .replace(/ufat/g, "u");
    return textoCriptografado;
}

function criptografarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const resultado = criptografar(inputTexto);
    document.getElementById("outputTexto").textContent = resultado;
}

function descriptografarTexto() {
    const inputTexto = document.getElementById("inputTexto").value;
    const resultado = descriptografar(inputTexto);
    document.getElementById("outputTexto").textContent = resultado;
}

function copiarTexto() {
    const outputTexto = document.getElementById("outputTexto").textContent;

    // Verifica se há texto a ser copiado
    if (outputTexto) {
        navigator.clipboard.writeText(outputTexto)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
            })
            .catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
    } else {
        alert("Nenhum texto para copiar!");
    }
}
