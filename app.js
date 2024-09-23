var input1 = document.querySelector("#input");
var submitbtn = document.querySelector("#submitbtn");
var output1 = document.querySelector("#output");
var globalArray = []
var additeminput = document.querySelector("#inputcss");


function addTodo() {
   output1.innerHTML = ""
   globalArray.push(additeminput.value)
   for(var i = 0 ; i < globalArray.length ; i++ ){
    output1.innerHTML = output1.innerHTML +  `<div id="outputcss"><p >${globalArray[i]}</p><div> <i class="fa-solid fa-trash" onclick="deleteTodo(${i})"></i> <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i></div></div>`
    additeminput.value = ""
   }

}

function deleteTodo() {
   output1.innerHTML = ""
   globalArray.splice(index,1);
   for(var i =0 ; i < globalArray.length ; i++ ){
    output1.innerHTML = output1.innerHTML +  `<div id="outputcss"><p >${globalArray[i]}</p><div> <i class="fa-solid fa-trash" onclick="deleteTodo(${i})"></i> <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i></div></div>`
   additeminput.value =""

   }

}






