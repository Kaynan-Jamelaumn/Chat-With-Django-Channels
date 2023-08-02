
const dropdownButton = document.querySelector('.dropdown-button');
const dropdown = document.querySelector('.dropdown');
const dropdownSubMenus = document.querySelectorAll('.dropdown-submenu');

dropdownButton.addEventListener('click', function () {
  dropdown.classList.toggle('hidden');
  dropdown.classList.toggle('show');
});

dropdownSubMenus.forEach(function (dropdownSubMenu) {
  dropdownSubMenu.addEventListener('click', function () {
    const dropdown = this.nextElementSibling;
    const icon = this.querySelector('i');

    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('show');

    if (icon.classList.contains('fa-plus')) {
      icon.classList.remove('fa-solid', 'fa-plus');
      icon.classList.add('fa-solid', 'fa-minus');
    } else {
      icon.classList.remove('fa-solid', 'fa-minus');
      icon.classList.add('fa-solid', 'fa-plus');
    }
  });
});


/* 
  const filter_button = document.querySelector('.filter-button');
  const category = document.querySelector('.category');
  
  filter_button.addEventListener('click', function() {
    category.classList.toggle('hidden');
    category.classList.toggle('show');


  //  if (category.style.display === 'none') {
  //     category.style.display = 'block';
  //   } else {
  //     category.style.display = 'none';
  //   }
    
  });
  
  const categoryButtons = document.querySelectorAll('.category-button');

  categoryButtons.forEach(function(categoryButton) {
    categoryButton.addEventListener('click', function() {
      const subcategory = this.nextElementSibling;
      const icon = this.querySelector('i');

      subcategory.classList.toggle('hidden');
      subcategory.classList.toggle('show');
      
      if (icon.classList.contains('fa-plus')){
        icon.classList.remove('fa-solid', 'fa-plus');
        icon.classList.add('fa-solid', 'fa-minus');
      } else{
        icon.classList.remove('fa-solid', 'fa-minus');
        icon.classList.add('fa-solid', 'fa-plus');
      }
      
    });
  });


*/