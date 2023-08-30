
const menuLinks = document.querySelectorAll('.menu');

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', function menuImages() {
    const fufuImage = document.createElement('img');
    fufuImage.src = "./static/fufuuu.jpeg"

    const menuLinkContainer = document.querySelector('.menu-container');
    menuLinkContainer.appendChild(fufuImage);
  });
});
