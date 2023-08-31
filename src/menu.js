
function menuPage(){
   // menuButton.addEventListener('click', function() {
        const menuContainer = document.createElement('div');
        menuContainer.style.backgroundColor= 'blue';
        
// Create a div for the first two images
const DishesDiv = document.createElement('div');
DishesDiv.classList.add('DishesDiv')
const pastriesDiv = document.createElement('div');
pastriesDiv.classList.add('pastriesDiv')
const cocktailDiv = document.createElement('div');
cocktailDiv.classList.add('cocktailDiv')

menuContainer.appendChild(DishesDiv)
menuContainer.appendChild(pastriesDiv)
menuContainer.appendChild(cocktailDiv)

document.body.appendChild(menuContainer);

const imageUrls1 = [
   './static/images/banku.jpeg',
   './static/images/friedRice.jpeg',
   './static/images/friesss.jpeg',
   './static/images/fufuuu.jpeg',
   './static/images/gcb3.jpeg',
   './static/images/jollof.jpeg',
 ];
 
 const dishTexts = [
   'Delicious Banku',
   'Tasty Fried Rice',
   'Crispy Fries',
   'Traditional Fufu',
   'Yummy GCB',
   'Flavorful Jollof Rice',
 ];
 
  // Assuming you have a div with the id 'dishes-container' in your HTML
 
 imageUrls1.forEach((imageUrl, index) => {
   const imageDiv = document.createElement('div');
   const image = document.createElement('img');
   image.src = imageUrl;
   image.alt = 'Image';
   image.style.width = '150px';
   image.style.height = '150px';
 
   const text = document.createElement('p');
   text.textContent = dishTexts[index];
 
   imageDiv.appendChild(image);
   imageDiv.appendChild(text);
   DishesDiv.appendChild(imageDiv);
 });
 
 

const imageUrls2 = [
    './static/images/burger.jpeg',
     './static/images/cake.jpeg',
     './static/images/cupcake.jpeg',
      './static/images/meatpie.jpeg',
     './static/images/pancake.jpeg',
    './static/images/pizza.jpeg', ];

imageUrls2.forEach((imageUrl) => {
  const imageDiv2 = document.createElement('div');
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = 'Image';
  image.style.width = '150px';
  image.style.height = '150px'

  const text = document.createElement('p');
  text.textContent = 'hello';

  imageDiv2.appendChild(image);
  imageDiv2.appendChild(text);

   pastriesDiv.appendChild(imageDiv2)
});

const imageUrls3 = [
   './static/images/summerPunchCocktail.jpg',
   './static/images/StrawberryCocktails.jpeg',
   './static/images/rainbowCocktail.jpeg',
   './static/images/milkshake.jpeg',
    './static/images/fruityCocktail.jpeg',
   './static/images/frozenVodka.jpeg' ];

imageUrls3.forEach((imageUrl) => {
  const imageDiv3 = document.createElement('div');
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = 'Image';
  image.style.width = '150px';
  image.style.height = '150px'

  const text = document.createElement('p');
  text.textContent = 'hello';

  imageDiv3.appendChild(image);
  imageDiv3.appendChild(text);

   cocktailDiv.appendChild(imageDiv3)
});

};

export default menuPage;