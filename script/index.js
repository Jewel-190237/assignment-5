let seatCount = 0;
function buyTicket() {
    document.addEventListener('click', handleKeyboardButtonPress);
}
let totalSeat = 41;
function handleKeyboardButtonPress(event) {
    const pressButton = event.target.id;

    totalSeat--;
    if (totalSeat > 36) {
        addBackgroundById(pressButton);
    }
    seatCount++;
    if (seatCount == 1) {
        showSeat1(pressButton);
        calculateTaka(550);
        totalInfo();
    }
    if (seatCount == 2) {
        showSeat2(pressButton);
        calculateTaka(550);
    }
    if (seatCount == 3) {
        showSeat3(pressButton);
        calculateTaka(550);
    }
    if (seatCount == 4) {
        showSeat4(pressButton);
        calculateTaka(550);
    }
}

function addBackgroundById(idElement) {
    let count = 1;
    seatAllocated(count);
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
function totalInfo() {
    const finalInfo = document.getElementById('final-info');
    finalInfo.classList.remove('hidden');
}

let total = 0;
function calculateTaka(value) {
    total = total + value;
    showTaka(total);
}

