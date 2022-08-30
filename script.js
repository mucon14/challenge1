const inputTexto = document.querySelector(".ingreso-mensaje-a-encriptar");
const mensaje = document.querySelector(".mensaje-encriptado");
const ocultar = document.getElementById(1).style.visibility = "hidden";

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    const ocultar = document.getElementById(1).style.visibility = "visible";
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    const ocultar = document.getElementById(1).style.visibility = "hidden";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i= 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i= 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.style.backgroundImage = "url('imagenes/muñeco.png"
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    inputTexto.value = mensaje.value;
    inputTexto.focus();
    mensaje.value = "";
    alert("Texto copiado");
}   






