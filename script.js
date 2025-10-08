const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const cancion = document.getElementById("miCancion");
const btn = document.getElementById("btnMusica");

menuOpenButton.addEventListener("click", () => {
//Toggle mobile menu
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu whe the close button is clicked
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu whe the nav link is clicked

    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    });


//Audio volumen

document.addEventListener('DOMContentLoaded', ()=>{
      const cancion = document.getElementById('miCancion');
      const btn = document.getElementById('btnMusica');
      console.log('miCancion found?', !!cancion, cancion);
      console.log('btnMusica found?', !!btn, btn);
      if(!cancion || !btn) return;
      cancion.volume = 0.35;
      btn.textContent = cancion.paused ? '▶' : '⏸';
      btn.addEventListener('click', async ()=>{
        try {
          if (cancion.paused) {
            cancion.volume = 0.50;
            await cancion.play();
            btn.textContent = '⏸';
          } else {
            cancion.pause();
            btn.textContent = '▶';
          }
        } catch(err) {
          console.error('play() error:', err);
          alert('No se pudo reproducir el audio. Revisa la consola.');
        }
      });
      cancion.addEventListener('play', ()=> btn.textContent = '⏸');
      cancion.addEventListener('pause', ()=> btn.textContent = '▶');
      cancion.addEventListener('volumechange', ()=> console.log('volume:', cancion.volume));
    });

// Countdown script

// ** CONFIGURACIÓN **
// 1. Define la fecha y hora de tu boda (¡ajusta esto!)
// Formato: Año, Mes-1, Día, Hora, Minuto, Segundo
// NOTA: El mes va de 0 (Enero) a 11 (Diciembre). Por ejemplo, Noviembre es 10.
const weddingDate = new Date("January 2, 2026 18:00:00").getTime(); 

// Elementos HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const contentEl = document.getElementById("content");

// Función que actualiza la cuenta regresiva
function updateCountdown() {
    // 1. Obtener la hora actual
    const now = new Date().getTime();

    // 2. Calcular el tiempo restante en milisegundos
    const timeLeft = weddingDate - now;

    // 3. Verificar si la cuenta ha terminado
    if (timeLeft < 0) {
        clearInterval(interval); // Detener el intervalo
        // Mostrar el mensaje de celebración
        contentEl.innerHTML = "<span>¡¡NOS CASAMOS!! 🎉🥳💍</span>"; 
        return;
    }

    // 4. Cálculos de tiempo
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = Math.floor(timeLeft / oneDay);
    const hours = Math.floor((timeLeft % oneDay) / oneHour);
    const minutes = Math.floor((timeLeft % oneHour) / oneMinute);
    const seconds = Math.floor((timeLeft % oneMinute) / oneSecond);

    // Función auxiliar para añadir un '0' inicial si el número es menor a 10
    const formatTime = (time) => String(time).padStart(2, '0');

    // 5. Insertar los valores en el HTML
    daysEl.textContent = formatTime(days);
    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
}

// Iniciar la cuenta regresiva:
// 1. Ejecutar la función inmediatamente para evitar el parpadeo inicial
updateCountdown();
// 2. Ejecutar la función cada 1000 milisegundos (1 segundo)
const interval = setInterval(updateCountdown, 1000);