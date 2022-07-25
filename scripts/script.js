function add() {
    if(document.getElementById('getText').value == '') {
        alert('Empty field!');
        return;
    }
    let todoList = document.getElementById('list');
    let item = document.createElement('div')
    item.className = 'todo-list-item';
    let itemText = document.createElement('h1');
    itemText.textContent = document.getElementById('getText').value;
    let removeBtn = document.createElement('button');
    removeBtn.onclick = function() { this.parentNode.remove(); };
    removeBtn.innerHTML = '<img src="imgs/remove.png" />'
    item.appendChild(itemText);
    item.appendChild(removeBtn);
    todoList.appendChild(item);
}

