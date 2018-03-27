document.addEventListener('DOMContentLoaded', init)


function init() {
    const addItemBTN = document.querySelector('#addItem');
    const itemToAddInput = document.querySelector('#itemToAdd');
    const todosList = document.querySelector('.todo-list');
    addItemBTN.addEventListener('click', addItem);

    todosList.addEventListener('click', eventManager)


    function eventManager(event) {
        const isTargetTodoItem = event.target.matches('.todo-item');
        const isTargetDeleteItem = event.target.matches('.delete');

        if (isTargetTodoItem) {
            markDone(event.target);
            event.stopPropagation();
            return;
        }

        if (isTargetDeleteItem) {
            crossItem(event.target)
        }
    }

    function crossItem(deleteBtn) {
        deleteBtn.parentElement.classList.toggle('deleted');
    }
    
    function markDone(todoItem) {
        todoItem.classList.toggle('green');
    }

    function addItem() {
        const newItemText = itemToAddInput.value;
        const newItem = createToDoItemElement(newItemText);
        todosList.appendChild(newItem);
    }

    function createToDoItemElement(text) {
        const newItem = document.createElement('li');
        newItem.classList.add('todo-item');
        newItem.innerHTML = `${text} <span class="delete">X</span>`;
        return newItem;
    }
}