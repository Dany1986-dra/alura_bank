// ==== Variables ====
const botonAbrirCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamera = document.querySelector("[data-camera]");

const botonTomarFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");
const botonEnviar = document.querySelector("[data-enviar]");

let tomarFoto = "";
let streamCamara = null;

// ==== Eventos ====
botonAbrirCamara.addEventListener("click", async (e) => {
  e.preventDefault();

  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  streamCamara = iniciarVideo;

  botonAbrirCamara.style.display = "none";
  campoCamera.style.display = "block";
  campoCamera.setAttribute("aria-hidden", "false");

  video.srcObject = iniciarVideo;
});

botonTomarFoto.addEventListener("click", (e) => {
  e.preventDefault();

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

  tomarFoto = canvas.toDataURL("image/png");

  if (streamCamara) {
    streamCamara.getTracks().forEach((track) => track.stop());
    streamCamara = null;
  }

  campoCamera.style.display = "none";
  campoCamera.setAttribute("aria-hidden", "true");
  mensaje.style.display = "block";
  mensaje.setAttribute("aria-live", "polite");
});

botonEnviar.addEventListener("click", (e)=>{
  e.preventDefault();

  const recibirDatos = localStorage.getItem("registro");
  const convertirDatos = JSON.parse(recibirDatos);

  convertirDatos.foto = tomarFoto;

  localStorage.setItem("registro", JSON.stringify(convertirDatos));

  window.location.href = "./abrir-cuenta-form-3.html";

});
