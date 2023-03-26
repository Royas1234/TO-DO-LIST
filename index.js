const listContainer = document.querySelector("#list-Container");
const form = document.querySelector(".todo-Form");
const  input = document.querySelector(".todo-input");
const addButton = document.querySelector("#add");

let todosItem = [ ];
function addItems(){
      
        const text = input.value.trim();
      if (text){
        todosItem.unshift(text); 
    
        input.value="";
      input.setAttribute( "placeholder", "Add new task...")
      localStorage.setItem("myTodoItem", JSON.stringify(todosItem));
      displayItem(text);
    
      } else{
        alert("You need to enter your task")
      }
       

        console.log(todosItem);
   
}
function displayItem(text, button){

    const todoItemElement = document.createElement("li");
    const textNode = document.createTextNode(text);
    const deleteItemButton = document.createElement("button");
    deleteItemButton.innerText = "x";
    todoItemElement.appendChild(textNode);
    todoItemElement.appendChild(deleteItemButton);
    listContainer.appendChild(todoItemElement);


  listContainer.insertBefore(todoItemElement, listContainer.children[0]);
 
 
  deleteItemButton.addEventListener("click",  deleteItem)
  
}
function deleteItem(){
console.log(this)
console.log(this.parentElement);
this.parentElement.remove();

}
addButton.addEventListener("click", addItems);

 