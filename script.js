const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value == '') {
        alert("No lo puedes dejar vacío :(");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

// click function
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){//los elemento li cliqueados se harán check
        e.target.classList.toggle("checked");//checked function
        saveData()
    }
    else if(e.target.tagName === "SPAN"){//la x es de tipo span
        e.target.parentElement.remove();//boton de delete 
        saveData()
    }
},false)


//para que no se elimine la lista en el reload
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()
