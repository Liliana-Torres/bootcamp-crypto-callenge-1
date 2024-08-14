
const textArea = document.querySelector(".text_area");
const textEncriptado = document.querySelector(".text_encriptado");
const keysEncrypt = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncrypt() {
    const textEncrypted = encrypt(textArea.value);
    textEncriptado.value = textEncrypted;
    textArea.value = "";
    textEncriptado.style.backgroundImage = "none";
}

function encrypt(stringEncrypted) {

    stringEncrypted = stringEncrypted.toLowerCase();

    for (let i = 0; i < keysEncrypt.length; i++) {
        if (stringEncrypted.includes(keysEncrypt[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(keysEncrypt[i][0], keysEncrypt[i][1]);
        }
    }
    return stringEncrypted;
};

function btnDecrypt() {
    const textEncrypted = decrypt(textArea.value);
    textEncriptado.value = textEncrypted;
    textArea.value = "";
}

function decrypt(stringDecrypt) {

    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < keysEncrypt.length; i++) {
        if (stringDecrypt.includes(keysEncrypt[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(keysEncrypt[i][1], keysEncrypt[i][0]);
        }
    }
    return stringDecrypt;
};

async function btnCopy() {
    try {
        await navigator.clipboard.writeText(textEncriptado.value);
    } catch (error) {
        console.error(error.message);
    }

}