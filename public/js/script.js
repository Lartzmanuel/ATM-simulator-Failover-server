
const time = document.getElementById('time');

// Function to dynamically display time on the welcome page under the welcome user text
function displayTime() {

    if(time){
        let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes();
    
         //Set am or Pm
         const amPm = hour >= 12? 'PM' : 'AM'
    
        //12 hr format
        hour = hour % 12 || 12
    
        time.innerHTML = `${addZero(hour)}:${addZero(min)} ${amPm}` 
    
        setTimeout(displayTime, 1000)
    }
}

// function to add zeros to single digits during the time/date display
function addZero(n) {
    return(parseInt(n , 10) < 10? '0' : '') + n;
}

// function calls
displayTime()
addZero()


const newDate = document.getElementById('date');
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

if(newDate){
    const date = new Date(),
    day = date.getDate(),
    year = date.getFullYear(),
    month = monthNames[date.getMonth()];

    //Add the appropriate suffix to the day
    let dateWithSuffix = addSuffix(day);

    newDate.innerHTML = `${dateWithSuffix} ${month.toUpperCase()}, ${year} |`;
}

function addSuffix(day){
    if(day > 3 && day < 21) return day + "TH";
    switch(day % 10) {
        case 1:  return day + "ST";
        case 2:  return day + "ND";
        case 3:  return day + "RD";
        default: return day + "TH";
    }
}

const myModal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const logoutBtn = document.getElementById('logoutBtn');

if(myModal){
    logoutBtn.addEventListener('click', () => {
    myModal.style.display = 'block';
    })
}

if(closeBtn){
    closeBtn.addEventListener('click', () => {
        myModal.style.display = 'none';
    })  
}


if(noBtn){
    noBtn.addEventListener('click', () => {
        myModal.style.display = 'none';
    }) 
}


window.onclick = (event) => {
    if(event.target == myModal ) {
        myModal.style.display = 'none';
    }
}

if(yesBtn){
    yesBtn.addEventListener('click', () => {
        window.location.href = '/pin';
         myModal.style.display = 'none';
    })  
}

const cardNumberInput = document.querySelector('.card-number-input');
const cardHolderInput = document.querySelector('.card-holder-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvvInput = document.querySelector('.cvv-input');
const frontCard = document.querySelector('.front');
const backCard = document.querySelector('.back');

if (cardNumberInput) {
    cardNumberInput.oninput = () => {
        document.querySelector('.card-number-box').innerText = cardNumberInput.value;
    };
}

if (cardHolderInput) {
    cardHolderInput.oninput = () => {
        document.querySelector('.card-holder-name').innerText = cardHolderInput.value;
    };
}

if (monthInput) {
    monthInput.oninput = () => {
        document.querySelector('.exp-month').innerText = monthInput.value;
    };
}

if (yearInput) {
    yearInput.oninput = () => {
        document.querySelector('.exp-year').innerText = yearInput.value;
    };
}

if (cvvInput && frontCard && backCard) {
    cvvInput.onmouseenter = () => {
        frontCard.style.transform = 'perspective(1000px) rotateY(-180deg)';
        backCard.style.transform = 'perspective(1000px) rotateY(0deg)';
    };

    cvvInput.onmouseleave = () => {
        frontCard.style.transform = 'perspective(1000px) rotateY(0deg)';
        backCard.style.transform = 'perspective(1000px) rotateY(180deg)';
    };
}