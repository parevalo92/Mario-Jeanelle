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

// Audio loop
