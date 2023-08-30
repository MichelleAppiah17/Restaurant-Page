
function aboutPage(){
    //aboutButton.addEventListener('click', function() {
        const aboutContainer = document.createElement('div');
        aboutContainerContainer.style.backgroundImage = 'url("./static/images/cake.jpeg")';
        aboutContainer.style.backgroundSize = 'cover'; 
        aboutContainer.style.backgroundRepeat = 'no-repeat';
     //document.body.appendChild(aboutContainer);

     const restaurantAboutInfo = document.createElement('h4');
     restaurantInfo.textContent= "Welcome to Aroma and Taste, where we are proud to serve delectable and inventive dishes made with locally sourced ingredients in a cozy and welcoming atmosphere. Whether you're looking for a casual meal or a special occasion, our menu will tantalize your taste buds and leave you wanting more. Join us for a memorable dining experience."
     aboutContainer.appendChild(restaurantInfo);

     const contact = document.createElement('h5')
     contact.textContent = "Contact: 0593009511"
     aboutContainer.appendChild(contact);

     const location = document.createElement('h5')
     location.textContent = "Location: Bunsu-Junction"
     aboutContainer.appendChild(location);

     document.body.appendChild(aboutContainer);

//});
};

export default aboutPage;