// TIME CIRCLES
var countSeconds = document.querySelectorAll(".count");
var countMinutes = document.querySelectorAll(".count-min");
var count = 231;

countSeconds.forEach(function (n) {
  return (n.innerHTML = "51");
});

countMinutes.forEach(function (m) {
  return (m.innerHTML = "03");
});

document.addEventListener("DOMContentLoaded", function () {
  changePageColor("pink");
  startCountdown(); // Start the countdown timer
});

// Function to start the countdown
function startCountdown() {
  var countdownInterval = setInterval(function () {
    var minutes = Math.floor(count / 60);
    var seconds = count % 60;

    // Display the updated time
    countMinutes.forEach(function (m) {
      m.innerHTML = padZero(minutes);
    });
    countSeconds.forEach(function (n) {
      n.innerHTML = padZero(seconds);
    });

    // Decrease the remaining seconds
    count--;

    // Stop the countdown when it reaches 0
    if (count < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000); // Update every second
}

// Helper function to pad zeros for single-digit minutes or seconds
function padZero(value) {
  return value < 10 ? "0" + value : value;
}

// Rest of your existing code...

// Crear function secondsCounter para el contador marcha atras

// Crear function changePageColor para cambiar el color
function changePageColor(color) {
  // Oculta todas las imágenes de color
  hideAllColors();

  // Muestra la imagen del color seleccionado
  showColorImage(color);

  // Cambia la clase del cuerpo para aplicar estilos de fondo según el color seleccionado
  setActiveColor(color);

  const logoIds = [
    "logoSilver",
    "logoBlack",
    "logoBlue",
    "logoGreen",
    "logoPink",
  ];
  logoIds.forEach(function (logoId) {
    const logoElement = document.getElementById(logoId);
    if (logoElement) {
      // Si el logo coincide con el color seleccionado, muestra el logo; de lo contrario, ocúltalo
      logoElement.style.display = logoId.toLowerCase().includes(color)
        ? "block"
        : "none";
    }
  });

  // Obtiene el color del botón activo y cambia el fondo de la página
  var activeColor = getActiveColor();
  if (activeColor) {
    document.body.className = "page-" + activeColor;
  }
}

function setActiveColor(selectedColor) {
  // Obtén la lista de todos los elementos con clase 'c-<color>'
  var colorElements = document.querySelectorAll('.colors [class^="c-"]');

  // Itera sobre los elementos y agrega o quita la clase 'active' según el color seleccionado
  colorElements.forEach(function (element) {
    var color = element.classList[0].substring(2); // Elimina el prefijo 'c-'
    if (color === selectedColor) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function getActiveColor() {
  // Obtiene el color del botón que tiene la clase 'active'
  var activeButton = document.querySelector(".colors .active");
  if (activeButton) {
    return activeButton.id;
  }
  return null;
}

// Resto del código...

function showColorImage(color) {
  // Oculta todas las imágenes de color y air-logos
  hideAllColors();
  hideAllAirLogos();

  // Muestra la imagen del color seleccionado y el air-logo correspondiente
  var selectedImage = document.getElementById(
    "ipad" + capitalizeFirstLetter(color)
  );
  var selectedLogo = document.getElementById(
    "logo" + capitalizeFirstLetter(color)
  );

  if (selectedImage && selectedLogo) {
    selectedImage.style.display = "block";
    selectedLogo.style.display = "block";
  }
}

function hideAllColors() {
  // Oculta todas las imágenes de color
  var colorImages = document.querySelectorAll(".color-img");
  colorImages.forEach(function (image) {
    image.style.display = "none";
  });
}

function hideAllAirLogos() {
  // Oculta todos los air-logos
  var airLogos = document.querySelectorAll(".air-logo");
  airLogos.forEach(function (logo) {
    logo.style.display = "none";
  });
}

function capitalizeFirstLetter(string) {
  // Convierte la primera letra de una cadena a mayúsculas
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getColorCode(color) {
  // Devuelve el código de color correspondiente al color seleccionado
  // Puedes personalizar esta función según tus necesidades
  switch (color) {
    case "silver":
      return "#C0C0C0";
    case "black":
      return "#000000";
    case "blue":
      return "#0000FF";
    case "green":
      return "#008000";
    case "pink":
      return "#FFC0CB";
    default:
      return "#FFFFFF"; // Valor predeterminado si el color no coincide
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Asigna el evento de clic al botón con el ID "check-1"
  document
    .getElementById("check-1")
    .addEventListener("click", function (event) {
      // Evita el comportamiento predeterminado del formulario (si es un botón dentro de un formulario)
      event.preventDefault();

      // Oculta la sección con ID "step1"
      document.getElementById("step1").style.display = "none";

      // Muestra la sección con ID "step2"
      document.getElementById("step2").style.display = "block";

      // Oculta la sección con ID "step3"
      document.getElementById("step3").style.display = "none";
    });
});
