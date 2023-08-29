
function homePage() {
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Aroma and Taste"
    document.body.appendChild(restaurantName);

    const tabsDiv = document.createElement("div");
    div.classList.add("tabs");
    document.body.appendChild(tabsDiv)

    const aboutTab = document.createElement("h3");
    aboutTab.textContent = "ABOUT"
    div.appendChild(aboutTab)

    const menuTab = document.createElement("h3");
    menuTab.textContent = "MENU"
    div.appendChild(menuTab)

    const orderTab = document.createElement("h3");
    orderTab.textContent = "ORDER"
    div.appendChild(orderTab)

}; 

export default homePage();