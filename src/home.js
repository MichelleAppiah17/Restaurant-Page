
function homePage() {
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Aroma and Taste"
    document.body.appendChild(restaurantName);

    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tabs");
    document.body.appendChild(tabsDiv)

     //about link
    const aboutTab = document.createElement("h3");
    const aboutLink = document.createElement("a");
    aboutLink.href = "ABOUT"
    aboutLink.textContent = "ABOUT"
    tabsDiv.appendChild(aboutLink)

     //menu link
     const menuTab = document.createElement("h3");
     const menuLink = document.createElement("a");
     menuLink.href = "MENU"
     menuLink.textContent = "MENU"
     tabsDiv.appendChild(menuLink)

     //order link
     const orderTab = document.createElement("h3");
     const orderLink = document.createElement("a");
     orderLink.href = "ORDER"
     orderLink.textContent = "ORDER"
     tabsDiv.appendChild(orderLink)
}; 

export default homePage();