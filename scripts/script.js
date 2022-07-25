function add() {
    if(document.getElementById('getText').value == '') {
        alert('Empty field!');
        return;
    }
    let todoList = document.getElementById('list');
    let item = document.createElement('div')
    item.className = 'todo-list-item';
    let itemText = document.createElement('h1');
    itemText.id = 'todotext';
    itemText.textContent = document.getElementById('getText').value;
    let editBtn = document.createElement('button');
    editBtn.onclick = function() { 
        let todoText = this.parentNode.childNodes[0].textContent;
        var editedText = prompt("Enter new todo: ");
        if(editedText !== '')
            this.parentNode.childNodes[0].textContent = editedText;
        else 
        alert("Enter not empty value");
    };
    editBtn.textContent = 'Edit';
    let removeBtn = document.createElement('button');
    removeBtn.onclick = function() {
        this.parentNode.remove();
     };
    removeBtn.innerHTML = '<img src="imgs/remove.png" />'
    item.appendChild(itemText);
    item.appendChild(editBtn);
    item.appendChild(removeBtn);
    todoList.appendChild(item);
}

