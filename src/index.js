
import menuPage from './menu'
import orderPage from './order'
import aboutPage from './about'
import './styles.css'

    const contentDiv = document.querySelector(".content");
    contentDiv.classList.add("contentDiv")
    document.body.appendChild(contentDiv)

    const restaurantNameDiv = document.createElement("div");
    restaurantNameDiv.classList.add("restaurantNameDiv");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Aroma and Taste";

    restaurantNameDiv.appendChild(restaurantName)
    document.body.appendChild(restaurantNameDiv)


    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tabs");
    document.body.appendChild(tabsDiv)

     
     const aboutButton = document.createElement('button');
     aboutButton.textContent = 'ABOUT';
     aboutButton.classList.add("tabsButton");
     tabsDiv.appendChild(aboutButton)

    
     const menuButton = document.createElement('button');
     menuButton.textContent = 'MENU';
     menuButton.classList.add("tabsButton");
     tabsDiv.appendChild(menuButton)
     
     
     const orderButton = document.createElement('button');
     orderButton.textContent = 'ORDER';
     orderButton.classList.add("tabsButton");
     tabsDiv.appendChild(orderButton)
     
        const bodyElement = document.body;
        bodyElement.style.backgroundImage = 'url("./static/images/background.jpg")';
        bodyElement.style.backgroundSize = 'cover'; 
        bodyElement.style.backgroundRepeat = 'no-repeat';

  menuButton.addEventListener('click', () => {
    clearContent();
     menuPage();
  });
  
  aboutButton.addEventListener('click', () => {
    clearContent();
    aboutPage();
  });
  
  orderButton.addEventListener('click', () => {
    clearContent();
    orderPage();
  });
  
   function clearContent() {
    if (contentDiv.innerHTML !== "") {
       contentDiv.innerHTML = "";
     } 
  };

