// JS document
// document elements
let pantalla = document.getElementById("pantalla");
let audio = document.getElementById("audioAlarma");
let pregunta1 = document.getElementById("pregunta1");
let pregunta2 = document.getElementById("pregunta2");
let pregunta3 = document.getElementById("pregunta3");
let pregunta4 = document.getElementById("pregunta4");
let pregunta5 = document.getElementById("pregunta5");
// variables
let contador;
let tiempo;

function empezarContador(){
    contador = 30;
    tiempo = setInterval(decrementar,1000);
}

function decrementar(){
    contador--;
    let textoSegundos = `${contador}s`;
    pantalla.textContent = textoSegundos;
    if (contador == 0){
        alert("Game over");
        clearInterval(tiempo);
        audio.play();
    }
}

function pausar(){
    let fecha = new Date();
    alert(`Fecha: ${fecha.toLocaleDateString('es-ES')}\nPregunta 1: ${pregunta1.value}\nPregunta 2: ${pregunta2.value}\nPregunta 3: ${pregunta3.value}\nPregunta 4: ${pregunta4.value}\nPregunta 5: ${pregunta5.value}`);
    clearInterval(tiempo);
}

function reiniciar(){
    location.reload();
}