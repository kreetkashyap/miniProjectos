// Form section
let form = document.getElementById('myForm');
const key = ['name','email','number','roll','job', 'T&C'];
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const popupMsg = document.getElementById('popupMsg');



// Ensure popup does NOT show when refreshing the browser without submitting the form

window.addEventListener('DOMContentLoaded', () => {
    popup.classList.add('hidden');
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = {};
    for(let item of key){
        if(e.target[item].type === "checkbox"){
            data[item] = e.target[item].checked;
        } else {
            data[item] = e.target[item].value;
        }
    }
    // alert("Form submitted");
   
    localStorage.setItem("userData" , JSON.stringify(data));
   

    // Reset form fields
    form.reset();
    
     // Show popup
     popupMsg.textContent = "Form submitted successfully!";
     popup.classList.remove('hidden');
})
// Close popup on click
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Optional: close popup if clicked outside content
popup.addEventListener('click', (e) => {
    if(e.target === popup){
        popup.classList.add('hidden');
    }
});


// Display section

const toggBtn = document.getElementById('toggle-btn')
const formContainer = document.querySelector('.formContainer')
const resultContainer = document.querySelector('.result-container')
const userPara = document.querySelectorAll('.result-container > p');
let toggState = true;


toggBtn.addEventListener('click', ()=>{
    if(toggState){
        loadData();
        formContainer.classList.add('none');
        toggState = false; 
        resultContainer.classList.remove('none');
        toggBtn.textContent = "Show Form"

    }
    else{
        resultContainer.classList.add('none');
        toggState = true;
        formContainer.classList.remove('none');
        toggBtn.textContent = "Show Data"
    }
})

function loadData(){
    const data = JSON.parse(localStorage.getItem('userData'));
    // userPara[0].textContent = `Name : ${data?.name}`;
    userPara[0].textContent = `Name : ${data?.name || '-'}`;
    userPara[1].textContent = `Email : ${data?.email}`
    userPara[2].textContent =  `Roll : ${data?.roll}`
    userPara[3].textContent =  `Number : ${data?.number}`
    userPara[4].textContent =   `Job : ${data?.job}`
    userPara[5].textContent =   `T&C : ${data?.['T&C']}`
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    form.reset();          // Reset all form fields
    popup.classList.add('hidden');  // Hide popup if open
});