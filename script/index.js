let seatCount = 0;
function buyTicket() {
    document.addEventListener('click', handleKeyboardButtonPress);
}
let totalSeat = 41;
function handleKeyboardButtonPress(event) {
    const pressButton = event.target.id;

    if (pressButton.length == 2){
        totalSeat--;
    if(totalSeat > 36) {
        addBackgroundById(pressButton);

        nextWork(pressButton)

        seatCount++;
    if (seatCount === 1) {
        showSeat1(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
        grandTotal(total);
    }
        
    
    if (seatCount === 2) {
        showSeat2(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
        grandTotal(total);
       
    }
    if (seatCount === 3) {
        showSeat3(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
        grandTotal(total);
    }
    if (seatCount === 4) {
        showSeat4(pressButton);
        calculateTaka(550); // Add 550 to the total
        totalInfo(total);
        grandTotal(total);
        handleCouponInput();
    }
    }
    }

}
let countSeat = 0;
function addBackgroundById(idElement) {
    let count = 1;
    seatAllocated(count);
    countSeat ++; 
    seatCountShow(countSeat);
    const element = document.getElementById(idElement);
    element.classList.add('bg-[#1DD100]');
}

function seatAllocated(value) {
    const seatText = document.getElementById('seat-count');
    const seatAvailable = seatText.innerText;
    const seat = parseInt(seatAvailable);
    const allocatedSeat = seat - value;
    if (allocatedSeat > 35) {
        seatText.innerText = allocatedSeat;
    }
}
function showSeat1(seatName) {
    const seatInfo = document.getElementById('seat-1');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name1');
    element.innerText = seatName;
}
function showSeat2(seatName) {
    const seatInfo = document.getElementById('seat-2');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name2');
    element.innerText = seatName;
}
function showSeat3(seatName) {
    const seatInfo = document.getElementById('seat-3');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name3');
    element.innerText = seatName;
}
function showSeat4(seatName) {
    const seatInfo = document.getElementById('seat-4');
    seatInfo.classList.remove('hidden');
    const element = document.getElementById('seat-name4');
    element.innerText = seatName;
}

function totalInfo(total) {
    const finalInfo = document.getElementById('final-info');
    finalInfo.classList.remove('hidden');
    const element = document.getElementById('total-taka');
    element.innerText = total;


//     const grandTotal= element.innerText;
   }
   function grandTotal(total){
    const element2=document.getElementById('grand-total');
    element2.innerText = total;
   }
  
  let total = 0;
  
  function calculateTaka(value) {
    total = total + value;
    return total;
  }

  function seatCountShow(value){
    const element = document.getElementById('seat-number');
    element.innerText = value;
    element.classList.remove('hidden');
}
// cuPhone




// // Function to handle input event
function handleCouponInput() {
    const couponInput = document.getElementById('haveCoupon');
    const couponCode = couponInput.value.trim(); // Get the entered coupon code and trim any leading or trailing spaces
    
    // Check if the entered coupon code is valid
    if (couponCode === 'NEW15') {
        const discount = total * 0.15;
        const finalTaka = total - discount;
        applyInfo(finalTaka); // Update the grand total with discounted amount
    } else if (couponCode === 'Couple 20') {
        const discount = total * 0.20;
        const finalTaka = total - discount;
        applyInfo(finalTaka); // Update the grand total with discounted amount
    } else {
        
        applyInfo(total);
        // alert('You have no coupon so be quite');
    }
}

// Function to update grand total
function applyInfo(total) {
    const finalInfo = document.getElementById('apply-info');
    finalInfo.classList.remove('hidden');
    const element = document.getElementById('grand-total');
    element.innerText = total;
}



// Add event listener to the coupon input field

document.getElementById('haveCoupon').addEventListener('click', handleCouponInput);



function seatCountShow(value){
    const element = document.getElementById('seat-number');
    element.innerText = value;
    element.classList.remove('hidden');
}

function nextWork(idValue){
    const element = document.getElementById('mobile-number');
    const elementText = element.value;

    const seatText = document.getElementById(idValue);
    const seatValue = seatText.innerText;
}

//     if((elementText.length == 11) && (seatValue.length > 0)){

//         const elementText = document.getElementById('next-button')
//         elementText.classList.add('hidden');
        
//         const elementValue = document.getElementById('open-success');
//         elementValue.classList.remove('hidden');
//     }
// }



