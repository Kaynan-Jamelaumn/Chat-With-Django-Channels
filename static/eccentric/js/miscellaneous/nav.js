const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show');
});

  /*
  menu.classList.toggle('show');
});*/ // JQUERY
  /*
 if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});*/

