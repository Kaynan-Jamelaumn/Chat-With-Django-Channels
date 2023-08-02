const gradientElements = document.querySelectorAll('.gradient');

gradientElements.forEach(element => {
  const bgColors = [];
  const classList = [...element.classList];

  for (let i = 0; i < classList.length; i++) {
    const className = classList[i];
    if (className.startsWith('bg-')) {
      element.classList.remove(className);
      const divElement = document.createElement('div')
      divElement.setAttribute('class', className);
      element.appendChild(divElement);
      const computedStyle = window.getComputedStyle(divElement).getPropertyValue('background-color');
      bgColors.push(computedStyle);
      element.removeChild(divElement);
    }
  }

  let gradient = '';
  switch (true) {
    case element.classList.contains('gradient-bottom'):
      gradient = `linear-gradient(to top, ${bgColors.join(', ')})`;
      element.style.background = gradient;
      break;

    case element.classList.contains('gradient-top'):
      gradient = `linear-gradient(to bottom, ${bgColors.join(', ')})`;
      element.style.background = gradient;
      break;

    case element.classList.contains('gradient-right'):
      gradient = `linear-gradient(to left, ${bgColors.join(', ')})`;
      element.style.background = gradient;
      break;

    case element.classList.contains('gradient-diagonal-left'):
      gradient = `linear-gradient(to top left, ${bgColors.join(', ')})`;
      element.style.background = gradient;
      break;

    case element.classList.contains('gradient-diagonal-right'):
      gradient = `linear-gradient(to top right, ${bgColors.join(', ')})`;
      element.style.background = gradient;
      break;

    default:
      gradient = `linear-gradient(to right, ${bgColors.join(', ')})`;
      element.style.background = gradient;
      break;
  }
});
