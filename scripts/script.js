function add() {
    let itemToSave = addDiv(document.getElementById('getText').value, false, new Date().toJSON());
    if(itemToSave != undefined)
        localStorage.setItem(JSON.parse(itemToSave).id, itemToSave);
}

function markTask(textNode) {
    if(textNode.style.textDecoration == 'line-through') {
        textNode.style.textDecoration = 'none';   
        return false;
     } else {
        textNode.style.textDecoration = 'line-through';
        return true;
     }
} 

function showTasks() {
    let todoList = document.getElementById('list'); 
    for(let key in localStorage) {
           if (!localStorage.hasOwnProperty(key) || localStorage.getItem(key) == undefined) {
                continue;
            }
        let item = JSON.parse(localStorage.getItem(key));
        addDiv(item.text, item.completed, item.id);
    }
}

function addDiv(todoText, isCompleted, date) {
    if(document.getElementById('getText').value == '') {
        alert('Empty field!');
        return;
    }
    let todoList = document.getElementById('list'); 
    let item = document.createElement('div')
    item.className = 'todo-list-item';
    item.id = date;
    let itemText = document.createElement('h1');
    itemText.textContent = todoText;
    itemText.addEventListener('click', () => { 
      localStorage.setItem(item.id, JSON.stringify({ id: item.id, text: todoText, 
        completed: markTask(itemText) }));
     });
    if(Date.now() - new Date(date) > 3 * 24 * 1000 * 3600)
        itemText.style.color = '#8d0000';
    else if(Date.now() - new Date(date) > 24 * 1000 * 3600)
        itemText.style.color = '#eb1111';
    let editBtn = document.createElement('button');
    editBtn.onclick = function() { 
        var editedText = prompt("Enter new todo: ");
        if(editedText != '' || editedText != null) {
            this.parentNode.childNodes[0].textContent = editedText;
            let i = JSON.parse(localStorage.getItem(this.parentNode.id));
            i.text = editedText;
            localStorage.setItem(item.id, JSON.stringify({ id: item.id, text: editedText, 
                completed: i.completed }));
        } else {
            alert("Enter not empty value");
        }
    };
    editBtn.id = 'editBtn';
    editBtn.textContent = 'Edit';
    let removeBtn = document.createElement('button');
    removeBtn.onclick = function() {
        this.parentNode.remove();
        localStorage.removeItem(this.parentNode.id);
     };
    removeBtn.textContent = 'Х';
    if(isCompleted) 
        itemText.style.textDecoration = 'line-through';
    item.appendChild(itemText);
    item.appendChild(editBtn);
    item.appendChild(removeBtn);
    todoList.appendChild(item);

    return JSON.stringify({ id: item.id, text: item.childNodes[0].textContent, 
        completed: item.childNodes[0].style.textDecoration == 'line-through' });
}