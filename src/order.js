
function orderPage(contentDiv){
    //orderButton.addEventListener('click', function() {
        const orderContainer = document.createElement('div');
        orderContainer.style.backgroundImage = 'url("./static/images/cake.jpeg")';
        orderContainer.style.backgroundSize = 'cover'; 
        orderContainer.style.backgroundRepeat = 'no-repeat';
       document.body.appendChild(orderContainer);

    const form = document.createElement('form');
    const formDiv = document.createElement('div')
    formDiv.classList.add('formDiv')
    formDiv.appendChild(form)
    document.body.appendChild(formDiv)

    const dishNameDiv = document.createElement('div');
    dishNameDiv.classList.add('label')
    const dishNameLabel = document.createElement('label');
    dishNameLabel.textContent = 'Name of Dish(s):';
    const dishNameInput = document.createElement('input');
    dishNameInput.type = 'text';
    dishNameInput.name = 'dishName';
    dishNameDiv.appendChild(dishNameLabel);
    dishNameDiv.appendChild(dishNameInput);
    form.appendChild(dishNameDiv);
    formDiv.appendChild(dishNameDiv)
    
    const dishAmountDiv = document.createElement('div');
    dishAmountDiv.classList.add('label')
    const dishAmountLabel = document.createElement('label');
    dishAmountLabel.textContent = 'Amount of Each Dish:';
    const dishAmountInput = document.createElement('input');
    dishAmountInput.type = 'number';
    dishAmountInput.name = 'dishNumber';
    dishAmountDiv.appendChild(dishAmountLabel);
    dishAmountDiv.appendChild(dishAmountInput);
    form.appendChild(dishAmountDiv);
    formDiv.appendChild(dishAmountDiv)
    
    const totalAmountDiv = document.createElement('div');
    totalAmountDiv.classList.add('label')
    const totalAmountLabel = document.createElement('label');
    totalAmountLabel.textContent = 'Total Amount:';
    const totalAmountInput = document.createElement('input');
    totalAmountInput.type = 'number';
    totalAmountInput.name = 'totalAmount';
    totalAmountDiv.appendChild(totalAmountLabel);
    totalAmountDiv.appendChild(totalAmountInput);
    form.appendChild(totalAmountDiv);
    formDiv.appendChild(totalAmountDiv)
    
    const deliveryDetailsDiv = document.createElement('div');
    deliveryDetailsDiv.classList.add('label')
    const deliveryDetailsLabel = document.createElement('label');
    deliveryDetailsLabel.textContent = 'Delivery Details:';
    const deliveryDetailsInput = document.createElement('textarea');
    deliveryDetailsInput.name = 'deliveryDetails';
    deliveryDetailsDiv.appendChild(deliveryDetailsLabel);
    deliveryDetailsDiv.appendChild(deliveryDetailsInput);
    form.appendChild(deliveryDetailsDiv);
    formDiv.appendChild(deliveryDetailsDiv)
    
    const reservationTimeDiv = document.createElement('div');
    reservationTimeDiv.classList.add('label')
    const reservationTimeLabel = document.createElement('label');
    reservationTimeLabel.textContent = 'Time for Reservation:';
    const reservationTimeInput = document.createElement('input');
    reservationTimeInput.type = 'time';
    reservationTimeInput.name = 'reservationTime';
    reservationTimeDiv.appendChild(reservationTimeLabel);
    reservationTimeDiv.appendChild(reservationTimeInput);
    form.appendChild(reservationTimeDiv);
    formDiv.appendChild(reservationTimeDiv)

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('orderButtonDiv')
    const orderButton = document.createElement('button');
    orderButton.classList.add('orderButton')
    orderButton.textContent = 'ORDER';
    orderButton.type = 'submit';
    formDiv.appendChild(buttonDiv)
    formDiv.appendChild(orderButton);
   
    //const contentDiv = document.getElementsByClassName('content');
    contentDiv.appendChild(orderContainer);

  document.body.appendChild(form);
  document.body.appendChild(orderContainer);

};

export default orderPage;