var list=document.getElementById('list')

function addTodo(){
    var todo_task=document.getElementById('todoItem')
    
    // creating li tag to add todo task
    var li=document.createElement('li')
    var listText=document.createTextNode(todo_task.value)
    li.appendChild(listText)
    li.setAttribute('class','liText')
    list.appendChild(li)
    
    
    // edit button
    var editbtn=document.createElement('button')
    var edittxt=document.createTextNode("Edit")
    editbtn.setAttribute('onclick','editItem(this)')
    editbtn.setAttribute('class','editbtn')
    editbtn.appendChild(edittxt)
    li.appendChild(editbtn)
    
    // del button
    var delbtn=document.createElement('button')
    var deltext=document.createTextNode("Delete")
    delbtn.setAttribute('onclick','deleteitem(this)')
    delbtn.setAttribute('class','delbtn')
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    
    todo_task.value=""
}
function deleteitem(e){
    e.parentNode.remove()
}

function delTodo(){
    list.innerHTML=""
}
function editItem(e){
    //shows alert to change the todo task
    var editVal=prompt("Edit your task",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=editVal
}