document.querySelector('.heart').addEventListener('click', function() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://daviidriv.github.io/carta.github.io/cartaM.pdf', true);
  xhr.responseType = 'blob'; 
  xhr.onload = function() {
      if (xhr.status === 200) {
          const blob = xhr.response;
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'cartita.pdf';
          link.click();
          window.URL.revokeObjectURL(link.href);
      } else {
          console.error('No se pudo descargar el archivo.');
      }
  };
  xhr.send();
});

var savedCountdown = localStorage.getItem('countDownDate');
var countDownMinutes = 30; // Cambiado a 30 minutos
var countDownDate;

if (!savedCountdown) {
  countDownDate = new Date().getTime() + (countDownMinutes * 60 * 1000); // Convertido a milisegundos
  localStorage.setItem('countDownDate', countDownDate.toString());
} else {
  countDownDate = parseInt(savedCountdown, 10);
}

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualiza el contenido del temporizador con un mensaje adicional
  document.getElementById("countdown").innerHTML = 
  `Nueva carta en: ${days}d ${hours}h ${minutes}m ${seconds}s <br> 🎂🎉 Feliz Cumpleaños Marbella 🎉🎂
  <br> Es un pequeño detalle hecho con mucho cariño. <br> ¡Espero que te guste! 😊💜`;


  localStorage.setItem('countDownDate', countDownDate.toString());
  localStorage.clear();
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").textContent = "¡Nueva carta disponible! <br> 🎉 Feliz Cumpleaños Marbella 🎉";
      localStorage.removeItem('countDownDate'); // Limpia el almacenamiento si el tiempo ha expirado
  }
}, 1000);
