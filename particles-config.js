particlesJS('particles-js', {
  "particles": {
      "number": {
          "value": 45,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffd700"  // Glowing Yellow
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false
      },
      "size": {
          "value": 3,
          "random": true
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffd700",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": false  // Disable interaction on hover
          },
          "onclick": {
              "enable": false  // Disable interaction on click
          },
          "resize": true
      }
  },
  "retina_detect": true
});
