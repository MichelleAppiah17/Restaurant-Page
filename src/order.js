
function orderPage(){
    //orderButton.addEventListener('click', function() {
        const orderContainer = document.createElement('div');
        orderContainer.style.backgroundImage = 'url("./static/images/cake.jpeg")';
        orderContainer.style.backgroundSize = 'cover'; 
        orderContainer.style.backgroundRepeat = 'no-repeat';
    document.body.appendChild(orderContainer);

const form = document.createElement('form');

const dishNameLabel = document.createElement('label');
dishNameLabel.textContent = 'Name of Dish(s):';
const dishNameInput = document.createElement('input');
dishNameInput.type = 'text';
dishNameInput.name = 'dishName';


const dishAmountLabel = document.createElement('label');
dishAmountLabel.textContent = 'Amount of Each Dish:';
const dishAmountInput = document.createElement('input');
dishAmountInput.type = 'number';
dishAmountInput.name = 'dishNumber';


const totalAmountLabel = document.createElement('label');
totalAmountLabel.textContent = 'Total Amount:';
const totalAmountInput = document.createElement('input');
totalAmountInput.type = 'number';
totalAmountInput.name = 'totalAmount';


const deliveryDetailsLabel = document.createElement('label');
deliveryDetailsLabel.textContent = 'Delivery Details:';
const deliveryDetailsInput = document.createElement('textarea');
deliveryDetailsInput.name = 'deliveryDetails';


const reservationTimeLabel = document.createElement('label');
reservationTimeLabel.textContent = 'Time for Reservation:';
const reservationTimeInput = document.createElement('input');
reservationTimeInput.type = 'time';
reservationTimeInput.name = 'reservationTime';


form.appendChild(dishNameLabel);
form.appendChild(dishNameInput);
form.appendChild(dishAmountLabel);
form.appendChild(dishAmountInput);
form.appendChild(totalAmountLabel);
form.appendChild(totalAmountInput);
form.appendChild(deliveryDetailsLabel);
form.appendChild(deliveryDetailsInput);
form.appendChild(reservationTimeLabel);
form.appendChild(reservationTimeInput);

document.body.appendChild(form);
document.body.appendChild(orderContainer);

//});
};

export default orderPage;