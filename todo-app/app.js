const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('Write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

































































































// const todoInp = document.getElementById('todo-inp');
// const saveBtn = document.getElementById("save-btn");
// const dataDiv = document.querySelector(".data");

// saveBtn.addEventListener('click', addTask);

// function addTask(){
//     let id = String(Math.random()*8000);
//     let data = {
//         id,
//         title: todoInp.value,
//     }
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push(data);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     todoInp.value = "";

//     showTask();
// }

// function showTask(){
//     dataDiv.innerHTML = '';
//     let showData = JSON.parse(localStorage.getItem('tasks'));
//     for(let item of showData){
//         let li = document.createElement('li'); // para = <p> </p>
//         let dlt = document.createElement('button');
//         dlt.textContent = "dlt";
//         console.log(dlt);
//         li.textContent = item.title; // para = <p>Title</p>
//         dataDiv.appendChild(li);
//     }
// }


