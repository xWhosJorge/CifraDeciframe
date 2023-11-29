function encrypt(text, shift) {
    return text
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                let shiftedCode = code + (shift % 26);
                if (char.match(/[a-z]/) && shiftedCode > 'z'.charCodeAt(0)) {
                    shiftedCode -= 26;
                } else if (char.match(/[A-Z]/) && shiftedCode > 'Z'.charCodeAt(0)) {
                    shiftedCode -= 26;
                }
                return String.fromCharCode(shiftedCode);
            }
            return char;
        })
        .join('');
}

function decrypt(text, shift) {
    return encrypt(text, 26 - (shift % 26));
}


function cifrar() {
    const inputText = document.getElementById('inputText').value;
    const shiftAmount = parseInt(document.getElementById('shiftAmount').value);
    const textoCifrado = encrypt(inputText, shiftAmount);
    document.getElementById('outputText').value = textoCifrado;
}
function descifrar() {
    const inputText = document.getElementById('inputText').value;
    const shiftAmount = parseInt(document.getElementById('shiftAmount').value);
    const textoDescifrado = decrypt(inputText, shiftAmount);
    document.getElementById('outputText').value = textoDescifrado;
}
    function copiarTexto() {
        const output = document.getElementById('outputText');
        output.select();
        document.execCommand('copy');
        alert('Texto encriptado copiado al portapapeles');
    }
    function limpiarCampos() {
        document.getElementById('inputText').value = '';
        document.getElementById('shiftAmount').value = '3';
        document.getElementById('outputText').value = '';
    }