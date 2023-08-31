
function orderPage(){
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
    const dishNameLabel = document.createElement('label');
    dishNameLabel.textContent = 'Name of Dish(s):';
    const dishNameInput = document.createElement('input');
    dishNameInput.type = 'text';
    dishNameInput.name = 'dishName';
    dishNameDiv.appendChild(dishNameLabel);
    dishNameDiv.appendChild(dishNameInput);
    form.appendChild(dishNameDiv);
    dishNameDiv.appendChild(formDiv)
    
    const dishAmountDiv = document.createElement('div');
    const dishAmountLabel = document.createElement('label');
    dishAmountLabel.textContent = 'Amount of Each Dish:';
    const dishAmountInput = document.createElement('input');
    dishAmountInput.type = 'number';
    dishAmountInput.name = 'dishNumber';
    dishAmountDiv.appendChild(dishAmountLabel);
    dishAmountDiv.appendChild(dishAmountInput);
    form.appendChild(dishAmountDiv);
    dishAmountDiv.appendChild(formDiv)
    
    const totalAmountDiv = document.createElement('div');
    const totalAmountLabel = document.createElement('label');
    totalAmountLabel.textContent = 'Total Amount:';
    const totalAmountInput = document.createElement('input');
    totalAmountInput.type = 'number';
    totalAmountInput.name = 'totalAmount';
    totalAmountDiv.appendChild(totalAmountLabel);
    totalAmountDiv.appendChild(totalAmountInput);
    form.appendChild(totalAmountDiv);
    totalAmountDiv.appendChild(formDiv)
    
    const deliveryDetailsDiv = document.createElement('div');
    const deliveryDetailsLabel = document.createElement('label');
    deliveryDetailsLabel.textContent = 'Delivery Details:';
    const deliveryDetailsInput = document.createElement('textarea');
    deliveryDetailsInput.name = 'deliveryDetails';
    deliveryDetailsDiv.appendChild(deliveryDetailsLabel);
    deliveryDetailsDiv.appendChild(deliveryDetailsInput);
    form.appendChild(deliveryDetailsDiv);
    deliveryDetailsDiv.appendChild(formDiv)
    
    const reservationTimeDiv = document.createElement('div');
    const reservationTimeLabel = document.createElement('label');
    reservationTimeLabel.textContent = 'Time for Reservation:';
    const reservationTimeInput = document.createElement('input');
    reservationTimeInput.type = 'time';
    reservationTimeInput.name = 'reservationTime';
    reservationTimeDiv.appendChild(reservationTimeLabel);
    reservationTimeDiv.appendChild(reservationTimeInput);
    form.appendChild(reservationTimeDiv);
    reservationTimeDiv.appendChild(formDiv)
    
  document.body.appendChild(form);
  document.body.appendChild(orderContainer);

};

export default orderPage;