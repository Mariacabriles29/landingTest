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

function startCountdown() {
  var countdownInterval = setInterval(function () {
    var minutes = Math.floor(count / 60);
    var seconds = count % 60;
    countMinutes.forEach(function (m) {
      m.innerHTML = padZero(minutes);
    });
    countSeconds.forEach(function (n) {
      n.innerHTML = padZero(seconds);
    });
    count--;
    if (count < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}
function padZero(value) {
  return value < 10 ? "0" + value : value;
}

// Crear function changePageColor para cambiar el color

function changePageColor(color) {
  hideAllColors();
  showColorImage(color);
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
      logoElement.style.display = logoId.toLowerCase().includes(color)
        ? "block"
        : "none";
    }
  });
  var activeColor = getActiveColor();
  if (activeColor) {
    document.body.className = "page-" + activeColor;
  }
}

function setActiveColor(selectedColor) {
  var colorElements = document.querySelectorAll('.colors [class^="c-"]');
  colorElements.forEach(function (element) {
    var color = element.classList[0].substring(2);
    if (color === selectedColor) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function getActiveColor() {
  var activeButton = document.querySelector(".colors .active");
  if (activeButton) {
    return activeButton.id;
  }
  return null;
}

function showColorImage(color) {
  hideAllColors();
  hideAllAirLogos();

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
  var colorImages = document.querySelectorAll(".color-img");
  colorImages.forEach(function (image) {
    image.style.display = "none";
  });
}

function hideAllAirLogos() {
  var airLogos = document.querySelectorAll(".air-logo");
  airLogos.forEach(function (logo) {
    logo.style.display = "none";
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkButtonContinue() {
  document
    .getElementById("check-1")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("step1").style.display = "none";
      document.getElementById("step2").style.display = "block";
      document.getElementById("step3").style.display = "none";
    });
}

// load page

document.addEventListener("DOMContentLoaded", function () {
  changePageColor("pink");
  startCountdown();
  checkButtonContinue();
});
