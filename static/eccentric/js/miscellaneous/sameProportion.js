const heightTag = document.querySelectorAll('.same-height');
let maxHeight = 0;

// Loop through all the cards and find the maximum height
heightTag.forEach(childTag => {
  const height = childTag.offsetHeight;
  if (height > maxHeight) {
    maxHeight = height;
  }
});

// Set the maximum height on all the cards
heightTag.forEach(childTag => {
  childTag.style.height = maxHeight + 'px';
});



const widthTag = document.querySelectorAll('.same-width');
let maxWidth = 0;

// Loop through all the cards and find the maximum height
widthTag.forEach(childTag => {
  const width = childTag.offsetWidth;
  if (width > maxWidth) {
    childTag = width;
  }
});

// Set the maximum height on all the cards
widthTag.forEach(childTag => {
  childTag.style.width = maxWidth + 'px';
});
