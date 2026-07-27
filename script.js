const piezas = [
  {
    archivo: "Video31-callepelo-hgde.mp4",
    tipo: "video",
    forma: "horizontal-gde",
  },
  { archivo: "carne-v.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "durazno1-v.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "labiocarne-h.jpg", tipo: "imagen", forma: "horizontal" },
  { archivo: "Video10-grapasojos-v.mp4", tipo: "video", forma: "vertical" },
  { archivo: "Video24-details-v.mp4", tipo: "video", forma: "vertical" },
  { archivo: "maquillajepez-c.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "roscinomakeup2-h.jpg", tipo: "imagen", forma: "horizontal" },
  { archivo: "Video32-deptorio-v.mp4", tipo: "video", forma: "vertical" },
  { archivo: "VIdeo11-marrojo-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "Video2-anillos-v.mp4", tipo: "video", forma: "vertical" },
  { archivo: "manodisfraz-c.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "Video9-telefono-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "varices-v.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "Video6-ventana-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "durazno2-v.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "durazno3-v.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "Video12-ventanaojo-h.mp4", tipo: "video", forma: "horizontal" },

  { archivo: "gusanoscorazon-v.mp4", tipo: "video", forma: "cuadrado" },
  { archivo: "Video3-pastel-h80.mp4", tipo: "video", forma: "horizontal-80" },
  { archivo: "hombrepluma-c.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "Video7-mascaras-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "Video30-cararamas-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "huevo-c.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "gelatinahuevo-h.jpg", tipo: "imagen", forma: "horizontal" },
  { archivo: "spaguetti-c.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "Video14-payasos-h.mp4", tipo: "video", forma: "horizontal" },
  {
    archivo: "Video13-paseogallina-hgde.mp4",
    tipo: "video",
    forma: "horizontal-gde",
  },

  { archivo: "Video17-cruz-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "Video22-fingers-v.mp4", tipo: "video", forma: "vertical" },
  { archivo: "obracabeza1-h.jpg", tipo: "imagen", forma: "horizontal" },
  { archivo: "michaelClark-h.jpg", tipo: "imagen", forma: "horizontal-80" },
  { archivo: "Video23-ojo-v.mp4", tipo: "video", forma: "vertical" },

  { archivo: "Video21-lavabo-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "greenmakeup-c.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "Video18-vampiro-h.mp4", tipo: "video", forma: "horizontal-80" },

  { archivo: "Video26-caminadora-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "Video27-globos-h.mp4", tipo: "video", forma: "horizontal" },
  { archivo: "roscinomakeup1-v.jpg", tipo: "imagen", forma: "vertical" },
  {
    archivo: "Video28-apichatpong-h80.mp4",
    tipo: "video",
    forma: "horizontal-80",
  },
  { archivo: "kiwi-v.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "botaplatano-v.jpg", tipo: "imagen", forma: "vertical" },
  { archivo: "caracemento-c.jpg", tipo: "imagen", forma: "cuadrado" },
  { archivo: "camamoreton-h.jpg", tipo: "imagen", forma: "horizontal" },
  { archivo: "pelocara-v.jpg", tipo: "imagen", forma: "vertical" },
];

const contenedor = document.querySelector(".collage");

piezas.forEach(function (pieza) {
  const bloque = document.createElement("div");
  bloque.classList.add("bloque", pieza.forma);

  if (pieza.tipo === "imagen") {
    const img = document.createElement("img");
    img.src = "fotosvideos/" + pieza.archivo;
    bloque.appendChild(img);
  } else {
    const video = document.createElement("video");
    video.src = "fotosvideos/" + pieza.archivo;
    video.loop = true;
    bloque.appendChild(video);
  }

  contenedor.appendChild(bloque);
});

const videos = document.querySelectorAll(".bloque video");

videos.forEach(function (video) {
  video.addEventListener("mouseenter", function () {
    video.muted = false;
    video.play();
  });

  video.addEventListener("mouseleave", function () {
    video.pause();
    video.currentTime = 0;
  });
  video.addEventListener("click", function () {
    if (video.paused) {
      video.muted = false;
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
});

const cursor = document.querySelector(".cursor-custom");

document.addEventListener("mousemove", function (evento) {
  cursor.style.left = evento.clientX + "px";
  cursor.style.top = evento.clientY + "px";
});

const formAutor = document.getElementById("formAutor");
const inputAutor = document.getElementById("inputAutor");
const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

formAutor.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensajeConfirmacion.textContent = "gracias, \"" + inputAutor.value + "\" quedó registrado.";
  inputAutor.value = "";
});

const botonArriba = document.getElementById("botonArriba");

botonArriba.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
