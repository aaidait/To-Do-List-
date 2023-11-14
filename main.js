document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.row button');
    const inputBox = document.getElementById('input-box');
    const todoList = document.querySelector('.todo-list');
    const clearButton = document.querySelector('.clear-btn');
    const deleteButton = document.querySelectorAll('.delete-btn');
    const editButton = document.querySelectorAll('.edit');

    


    addButton.addEventListener('click', addTask);
    clearButton.addEventListener('click', clearItems);

    function addTask() {
        const inputValue = inputBox.value.trim();

        if (inputValue !== '') {
            const currentTime = getCurrentTime();
            const newItem = createTodoItem(inputValue, currentTime);
            todoList.appendChild(newItem);
            inputBox.value = '';

            if (todoList.children.length >= 10) {
                addButton.disabled = true;
            }
        } else {
            alert('You have to write something!'); 
        }
    }

    function getCurrentTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        return `${hours}:${minutes}`;
    }

    function createTodoItem(title, timestamp) {
        const newItem = document.createElement('div');
        newItem.classList.add('todo-list__item');
        newItem.innerHTML = `
        <span class="title" style="color: white;">${title}</span>
        <span class="timestamp" style="color: white;">${timestamp}</span>
        <div class="btn-container">
            <button class="edit" style="color: white;">edit</button>
            <button class="delete-btn" onclick="deleteTask(this)" style="color: white;">delete</button>
        </div>
        `;
        return newItem;
    }

    function deleteTask(button) {
        const taskItem = button.closest('.todo-list__item');
        taskItem.remove();

        addButton.disabled = false;
    }

    function clearItems() {
        todoList.innerHTML = '';
        addButton.disabled = false; 
    }
});



    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            console.log('Delete button clicked');
        });
    });

    editButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            console.log('Edit button clicked');
        });
    });
;



// const form = document.querySelector('.todo-list-form');
// const alert = document.querySelector('.alert')
// const input = document.getElementById('.todo-list-input');
// const submitBtn = document.querySelector('.submit-btn');
// const todoList = document.querySelector('.todo-list-list');
// const clearBtn = document.querySelector('.clear-btn');

// let editElement
// let editFlag = false
// let editId = ''

// form.addEventListener('submit', addItem)
// clearBtn.addEventListener('click', clearItems)
// document.addEventListener('DOMContentLoaded', initList)

// function addItem(e) {
//     e.preventDefault()
//     const value = input.value
// const id = new Date().getTime().toString
//     const createdAt = getCurrentTime()

// if (todoList.children.length >= 10) {
//     console.log('alert');
//     setBackToDefault()
//     return
// }

//     if (value && !editFlag) {
//         createListItem
//     } else {
//         console.log('please enter value')
//     }
// }
// createListItem(id, value, createdAt)

// displyAlert('Item added to the list', 'success')
// addToLocalStorage(id, value, createdAt)

// setBackToDefault()
// function editItem(e) {
//     const el = e.currentTarget.parentElement.previousElementSibling(querySelector);
//     editElement = el
//     input.value = editElement.text
//     submitBtn.textContent = 'edit'
//     editFlag = true
// }

// function clearItems(){

// }

// function getCurrentTime(){
//     const currentDate = new Date()
//     const hours = currentDate.getHours()
//     const minutes = currentDate.getMinutes()
//     const seconds = currentDate.getSeconds()
//     // vyzyavat!
//     return currentDate.toLocaleDateString()
// }

// function createListItem(value, createdAt) {
//     const taskElement = document.createElement('div');
//     taskElement.classList.add('todo-list__item');
//     taskElement.innerHTML = `
//     <span class ="title">value from input</span>`

// }

// const deleteBtn =taskElement.querySelector('.delete-btn')
// deleteBtn.addEventListener('click', removeItem)

// const editBtn = taskElement

