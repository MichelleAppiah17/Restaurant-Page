
function aboutPage(){
        const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('aboutContainer')
       // aboutContainerContainer.style.backgroundImage = 'url("./static/images/cake.jpeg")';
       // aboutContainer.style.backgroundSize = 'cover'; 
       // aboutContainer.style.backgroundRepeat = 'no-repeat';

     const restaurantAboutInfo = document.createElement('h4');
     restaurantAboutInfo.textContent= "Welcome to Aroma and Taste, where we are proud to serve delectable and inventive dishes made with locally sourced ingredients in a cozy and welcoming atmosphere. Whether you're looking for a casual meal or a special occasion, our menu will tantalize your taste buds and leave you wanting more. Join us for a memorable dining experience."
     aboutContainer.appendChild(restaurantAboutInfo);

     const contact = document.createElement('h5')
     contact.textContent = "Contact: 0593009511"
     aboutContainer.appendChild(contact);

     const location = document.createElement('h5')
     location.textContent = "Location: Bunsu-Junction"
     aboutContainer.appendChild(location);

     //if (restaurantAboutInfo.style.display !== 'block'){
       // restaurantAboutInfo.style.display = 'block';
    // }

     document.body.appendChild(aboutContainer);

};

export default aboutPage;