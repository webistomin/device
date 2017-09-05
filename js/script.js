var Maplink = document.querySelector(".js-open-map");
var Mappopup = document.querySelector(".map-popup");
var Mapclose = Mappopup.querySelector(".close-btn");
var Mapoverlay = document.querySelector(".overlay");

Maplink.addEventListener("click", function(event) {
  event.preventDefault();
  Mappopup.classList.add("map-popup--show");
  Mapoverlay.classList.add("overlay--show");
});

Mapclose.addEventListener("click", function(event) {
  event.preventDefault();
  Mappopup.classList.remove("map-popup--show");
  Mapoverlay.classList.remove("overlay--show");
});

Mapoverlay.addEventListener("click", function(event) {
  event.preventDefault();
  if (Mapoverlay.classList.contains("overlay--show")) {
    Mapoverlay.classList.remove("overlay--show");
  }
  if (Mappopup.classList.contains("map-popup--show")) {
    Mappopup.classList.remove("map-popup--show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (Mappopup.classList.contains("map-popup--show")) {
      Mappopup.classList.remove("map-popup--show");
      Mapoverlay.classList.remove("overlay--show");
    }
  }
});

var link = document.querySelector(".write-us");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close-btn");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup--show");
    overlay.classList.add("overlay--show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup--show");
    overlay.classList.remove("overlay--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
  }
  if (popup.classList.contains("popup--show")) {
    popup.classList.remove("popup--show");
  }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup--show")) {
            popup.classList.remove("popup--show");
            overlay.classList.remove("overlay--show");
        }
    }
});
