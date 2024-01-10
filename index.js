// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const mouses = document.querySelectorAll(".custom-cursor ");

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.clientX + "px";
    mouse.style.top = e.clientY + "px";
  });
});

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
