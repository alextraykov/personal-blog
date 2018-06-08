const gradientWrapper = document.getElementById('canvas-interactive');
const sectionItems = document.querySelectorAll('.section__item')

const gradientInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.wrapper',
  direction: 'diagonal',
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states: {
    'default-state': {
      gradients: [
        ['#1C1C2D', '#1C1C2D']
      ]
    },
    'adblue-state': {
      gradients: [
        ['#b0e1ff', '#0d8eff'],
        ['#0F5EC6', '#051E53'],
      ],
      transitionSpeed: 2000
    },
    'pruvit-state': {
      gradients: [
        ['#008AFD', '#9B59E6'],
        ['#9B59E6', '#008AFD']
      ],
      transitionSpeed: 2000
    },
    'sport-state': {
      gradients: [
        ['#04BF5B', '#03A64F'],
        ['#038C43', '#006630']
      ],
      transitionSpeed: 2000
    },
    'cms-state': {
      gradients: [
        ['#00A0E1', '#373D40'],
        ['#2C3032', '#0B1214']
      ],
      transitionSpeed: 2000
    },
    'grub-state': {
      gradients: [
        ['#FFB28F', '#ED8555'],
        ['#ED8555', '#FFB28F']
      ],
      transitionSpeed: 2000
    },
    'wall-state': {
      gradients: [
        ['#334663', '#3E5173'],
        ['#3E5173', '#FF545B']
      ],
      transitionSpeed: 2000
    }
  }
})

sectionItems.forEach((se, i) => {
  se.addEventListener('mouseover', (e) => {
    e.preventDefault();
    gradientInstance.changeState(e.target.getAttribute('data-gradient'));
  });

  se.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    gradientInstance.changeState('default-state');
  });
})