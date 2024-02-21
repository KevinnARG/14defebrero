const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const textoQueCambia = document.getElementById("otrotexto");
const confetti = document.getElementById("gif");
let vecesNo = 0;
let repetibles = ['No hay devoluciones', 'Estás completamente segura?', 'No te vas a arrepentir?', 'No hay vuelta atras..']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

botonNo.addEventListener("click", () => {
    vecesNo++
    if (vecesNo == 1) {
        textoQueCambia.textContent = "SEGURA..?"
        document.title = "😢😢😢😢😢"
    } else if (vecesNo == 2) {
        textoQueCambia.textContent = "SEGURISIMA? :("
    } else {
        textoQueCambia.textContent = `${repetibles[getRandomInt(repetibles.length)]}`
    } 
});

botonSi.addEventListener("click", () => {
    botonSi.style.display = "none"
    botonNo.style.display = "none"

    textoQueCambia.textContent = "Gracias por aceptar, te amo"
    document.title = "TE AMOOO ❤❤"
    confetti.style.display = "flex"
})
