// const radioButtons = document.querySelectorAll('input[type="radio"]')

// radioButtons.forEach(button => {
//     button.addEventListener('change', () => {
//         if(button.checked){
//             console.log(button.value)
//         }
//     } )
// })


   
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    const date = new Date(),
    day = date.getDate(),
    year = date.getFullYear(),
    month = monthNames[date.getMonth()]

    //Add the appropriate suffix to the day
    let dateWithSuffix = addSuffix(day);

    let dateFormat = `${dateWithSuffix} ${month.toUpperCase()}, ${year} |`

    const newDate = document.getElementById('date');

    newDate.innerHTML = dateFormat;


    function addSuffix(day){
        if(day > 3 && day < 21) return day + "TH";
        switch(day % 10) {
            case 1:  return day + "ST";
            case 2:  return day + "ND";
            case 3:  return day + "RD";
            default: return day + "TH";
        }
    }


    function displayTime() {
        const time = document.getElementById('time');

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

    function addZero(n) {
        return(parseInt(n , 10) < 10? '0' : '') + n;
    }
    
    displayTime()
    addZero()


    function displayModal(){
        const myModal = document.getElementById('myModal');
        const btn = document.getElementById('logoutBtn');

        btn.onclick = () => {
            myModal.style.display = 'block';
        }
        
        window.onclick = (event) => {
            if(event.target == myModal ) {
                myModal.style.display = 'none';
            }
        }
        
    }

    function Close() {
        const myModal = document.getElementById('myModal');
            myModal.style.display = 'none';
    }

    function Logout(){
        window.location.href = '/pin'
        const myModal = document.getElementById('myModal');
         myModal.style.display = 'none';

    }
 
    
    document.querySelector('.card-number-input').oninput = () => {
        document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value
    }
    
    document.querySelector('.card-holder-input').oninput = () => {
        document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value
    }
    
    document.querySelector('.month-input').oninput = () => {
        document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value
    }
    
    document.querySelector('.year-input').oninput = () => {
        document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value
    }
    
    document.querySelector('.cvv-input').onmouseenter = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    }
    
    document.querySelector('.cvv-input').onmouseleave = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    }
    
    document.querySelector('.cvv-input').oninput = () => {
        document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
    }
    
    

    