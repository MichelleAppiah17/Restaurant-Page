
function aboutPage(){
        const aboutContainerDiv = document.createElement('div');
        aboutContainerDiv.classList.add('aboutContainerDiv')

        const aboutContainer = document.createElement("div");
        aboutContainer.classList.add("aboutContainer");

     const restaurantAboutInfo = document.createElement('h4');
     restaurantAboutInfo.textContent= "Welcome to Aroma and Taste, where we are proud to serve delectable and inventive dishes made with locally sourced ingredients in a cozy and welcoming atmosphere. Whether you're looking for a casual meal or a special occasion, our menu will tantalize your taste buds and leave you wanting more. Join us for a memorable dining experience."
     aboutContainer.appendChild(restaurantAboutInfo);

     const contact = document.createElement('h5')
     contact.textContent = "Contact: 0593009511"
     aboutContainer.appendChild(contact);

     const location = document.createElement('h5')
     location.textContent = "Location: Bunsu-Junction"
     aboutContainer.appendChild(location);

     const contentDiv = document.querySelector(".content");
     aboutContainerDiv.appendChild(aboutContainer);
 
     contentDiv.appendChild(aboutContainerDiv);
     document.body.appendChild(contentDiv)

};

export default aboutPage;