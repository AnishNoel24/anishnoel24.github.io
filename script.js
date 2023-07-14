$(document).ready(function () {

  // Fakes the loading setting a timeout
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 1500);

});
var projectOverlay = document.getElementById("project-overlay");
var aboutOverlay = document.getElementById("about-overlay");
var contactOverlay = document.getElementById("contact-overlay");

function toggleProjectOverlay() {
  if (projectOverlay.classList.contains("show")) {
    hideProjectOverlay();
  } else {
    showProjectOverlay();
  }
}

function showProjectOverlay() {
  projectOverlay.classList.add("show");
}

function hideProjectOverlay() {
  projectOverlay.classList.remove("show");
}

function toggleAboutOverlay() {
  if (aboutOverlay.classList.contains("show")) {
    hideAboutOverlay();
  } else {
    showAboutOverlay();
  }
}

function showAboutOverlay() {
  aboutOverlay.classList.add("show");
}

function hideAboutOverlay() {
  aboutOverlay.classList.remove("show");
}

function toggleContactOverlay() {
  if (contactOverlay.classList.contains("show")) {
    hideContactOverlay();
  } else {
    showContactOverlay();
  }
}

function showContactOverlay() {
  contactOverlay.classList.add("show");
}

function hideContactOverlay() {
  contactOverlay.classList.remove("show");
}
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}
