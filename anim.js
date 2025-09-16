// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Carry me home, got my blue nail polish on", time: 9 },
  { text: "It's my favorite color and my favorite tone of song ", time: 17 },
  { text: "I don't really wanna break up, we got it going on", time: 26 },
  { text: "It's what you gathered from my talk, but you were wrong", time: 34 },
  { text: "It's not easy for me to talk about", time: 44 },
  { text: "I have heavy heart strings", time: 48 },
  { text: "And not simple, it's trigonometry", time: 52},
  { text: "It's hard to express I can't explain", time:56  },
  { text: "Ever since my baby went away", time: 62 },
  { text: "It's been the blackest day, it's been the blackest day", time: 70 },
  { text: "All I hear is Billie Holiday", time: 81 },
  { text: "It's all that I play", time: 86 },
  { text: "It's all that I play", time: 89 },
  { text: "Because I'm going deeper and deeper (deeper)", time: 97 },
  { text: "Harder and harder (harder)", time: 102 },
  { text: "Getting darker and darker", time: 105 },
  { text: "Looking for love", time: 109 },
  { text: "In all the wrong places", time: 113 },
  { text: "Oh my god", time: 118 },
  { text: "In all the wrong places", time: 124 },
  { text: "Oh my god", time: 128 },
  { text: "Carry me home, got my new car and my gun", time: 134 },
  { text: "Wind in my hair, holding your hand, listen to a song", time: 141 },
  { text: "Carry me home, don't wanna talk about the things to come", time: 151 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);