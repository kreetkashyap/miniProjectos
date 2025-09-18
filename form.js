// Form section
let form = document.getElementById('myForm');
const key = ['name','email','number','roll','job', 'T&C'];



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
    alert("Form submitted");
    localStorage.setItem("userData" , JSON.stringify(data));
    console.log("Saved:", data);

    
})

// TODO style the form, center in the display
// TODO add css class to hide/show the form once the data is filled the form should dissapear and a result block wil come with a buton to dife hide the result block and form would appear with empty feilds

// Display section

const toggBtn = document.getElementById('toggle-btn')
const formContainer = document.querySelector('.formContainer')
const resultContainer = document.querySelector('.result-container')
const userPara = document.querySelectorAll('.result-container > p');
console.log(userPara);
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
    userPara[0].textContent = `Name : ${data?.name}`;
    userPara[1].textContent = `Email : ${data?.email}`
    userPara[2].textContent =  `Roll : ${data?.roll}`
    userPara[3].textContent =  `Number : ${data?.number}`
    userPara[4].textContent =   `Job : ${data?.job}`
    userPara[5].textContent =   `T&C : ${data?.['T&C']}`
}