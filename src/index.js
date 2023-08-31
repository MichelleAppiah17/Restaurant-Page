//import homePage from './home'
import menuPage from './menu'
import orderPage from './order'
import aboutPage from './about'
import './styles.css'

    const contentDiv = document.getElementsByClassName('content')[0];

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Aroma and Taste"
   // contentDiv.appendChild(tabsDiv)
     contentDiv.appendChild(restaurantName)
   // document.body.appendChild(restaurantName);

    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tabs");
    //contentDiv.appendChild(restaurantName);
      contentDiv.appendChild(tabsDiv);
      document.body.appendChild(tabsDiv)

     //about button
     const aboutButton = document.createElement('button');
     aboutButton.textContent = 'ABOUT';
     aboutButton.classList.add("tabsButton");
     tabsDiv.appendChild(aboutButton)

     //menu button
     const menuButton = document.createElement('button');
     menuButton.textContent = 'MENU';
     menuButton.classList.add("tabsButton");
     tabsDiv.appendChild(menuButton)
     
     //order button
     const orderButton = document.createElement('button');
     orderButton.textContent = 'ORDER';
     orderButton.classList.add("tabsButton");
     tabsDiv.appendChild(orderButton)
     
        const bodyElement = document.body;
        bodyElement.style.backgroundImage = 'url("./static/images/background.jpg")';
        bodyElement.style.backgroundSize = 'cover'; 
        bodyElement.style.backgroundRepeat = 'no-repeat';

menuButton.addEventListener('click', () => {
   // clearContent();
    menuPage();
    aboutPage.style.display = 'none'
    orderPage.style.display = 'none'
//menuPage();
  });
  
  aboutButton.addEventListener('click', () => {
   // clearContent();
    aboutPage();
  });
  
  orderButton.addEventListener('click', () => {
    clearContent();
    orderPage();
  });

    //contentDiv.appendChild(tabsDiv)
    //contentDiv.appendChild(restaurantName)
  
  function clearContent() {
    contentDiv.innerHTML = '';
  }

