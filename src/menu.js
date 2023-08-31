
function menuPage(){
        const menuContainer = document.createElement('div');
        menuContainer.style.backgroundColor= 'rgba(0, 0, 255, 0.5)';
        
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
 
 const dishTexts1 = [
   'Banku and Tilapia: ',
   'Fried Rice',
   'Fries',
   'Fufu',
   'G)b3',
   'Jollof Rice',
 ];
 
 imageUrls1.forEach((imageUrl, index) => {
   const imageDiv = document.createElement('div');
   const image = document.createElement('img');
   image.src = imageUrl;
   image.alt = 'Image';
   image.style.width = '150px';
   image.style.height = '150px';
 
   const text = document.createElement('p');
   text.textContent = dishTexts1[index];
 
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
  './static/images/pizza.jpeg'
 ];
 
 const dishTexts2 = [
   'Burger',
   'Cake',
   'Cup cake',
   'Meatpie',
   'Pancake',
   'Pizza',
 ];
 
 imageUrls2.forEach((imageUrls2, index) => {
   const imageDiv = document.createElement('div');
   const image = document.createElement('img');
   image.src = imageUrls2;
   image.alt = 'Image';
   image.style.width = '150px';
   image.style.height = '150px';
 
   const text = document.createElement('p');
   text.textContent = dishTexts2[index];
 
   imageDiv.appendChild(image);
   imageDiv.appendChild(text);
   pastriesDiv.appendChild(imageDiv);
 });

 const imageUrls3 = [
   './static/images/summerPunchCocktail.jpg',
   './static/images/StrawberryCocktails.jpeg',
   './static/images/rainbowCocktail.jpeg',
   './static/images/milkshake.jpeg',
    './static/images/fruityCocktail.jpeg',
   './static/images/frozenVodka.jpeg'
 ];
 
 const dishTexts3= [
   'summer Punch Cocktail',
   'Strawberry Cocktail',
   'rainbow Cocktail',
   'milkshake',
   'fruity Cocktail',
   'frozen Vodka',
 ];
 
 imageUrls3.forEach((imageUrls3, index) => {
   const imageDiv = document.createElement('div');
   const image = document.createElement('img');
   image.src = imageUrls3;
   image.alt = 'Image';
   image.style.width = '150px';
   image.style.height = '150px';
 
   const text = document.createElement('p');
   text.textContent = dishTexts2[index];
 
   imageDiv.appendChild(image);
   imageDiv.appendChild(text);
   cocktailDiv.appendChild(imageDiv);
 });
 
};

export default menuPage;