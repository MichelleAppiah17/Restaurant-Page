
//function homePage() {
    const contentDiv = document.getElementsByClassName('content')
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Aroma and Taste"
    document.body.appendChild(restaurantName);

    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tabs");
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

//}; 

//export default homePage();