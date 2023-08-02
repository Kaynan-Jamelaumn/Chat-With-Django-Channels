const menuToggle = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const menu = document.querySelector('.menu');
const menuTypeClassList = menu.classList;

menuToggle.addEventListener('click', function () {
  //resizeMenuWidth()

  if (menuTypeClassList.contains('menu-left-m')) {
    menu.style.left = '0';
    return
  }
  if (menuTypeClassList.contains('menu-right')) {
    menu.style.right = '0';
    return
  }
  if (menuTypeClassList.contains('menu-top')) {
    menu.style.top = '0';
    return
  }
  if (menuTypeClassList.contains('menu-bottom')) {
    document.querySelector('.menu-bottom').style.bottom = '0';
  }
});

menuToggleClose.addEventListener('click', function () {
  if (menuTypeClassList.contains('menu-left-m')) {
    menu.style.left = `-${menu.offsetWidth}px`; // "-" + menu.offsetWidth + "px";
    return
  }
  if (menuTypeClassList.contains('menu-right')) {
    menu.style.right = `-${menu.offsetWidth}px`;
    return
  }
  if (menuTypeClassList.contains('menu-top')) {
    menu.style.top = `-${menu.offsetWidth}px`;
    return
  }
  if (menuTypeClassList.contains('menu-bottom')) {
    document.querySelector('.menu-bottom').style.bottom = '-100%';
  }
});
/*

function resizeMenuWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 480 && screenWidth <= 767) {
    menu.style.width = '350px';
    return
  }
  if (screenWidth <= 479) {
    menu.style.width = '300px';
    return
  }


  if (screenWidth > 768 && screenWidth < 1024) {
    menu.style.width = '400px';
    return
  }
  if (screenWidth > 1024 && screenWidth < 1440) {
    menu.style.width = '420px';
    return
  }
  if (screenWidth > 1440) {
    menu.style.width = '450px';
    return
  }
}
    /*
   console.log(menu.offsetWidth);
   const screenWidth = window.innerWidth;
   if (window)*/

/*
if (cssClass.startsWith('w')) {
  const distance = Number(cssClass.slice(1));
  const screenWidth = window.innerWidth;
  console.log('tamanho', screenWidth, distance)
  console.log(screenWidth * (distance / 100))
  if ((screenWidth * (distance / 100)) < 300) {
    menu.style.left = `-${distance}%`;
  }
  else {
    menu.style.left = `-${distance}300px`;
  }
}
*/