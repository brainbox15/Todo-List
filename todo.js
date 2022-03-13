// grabs and stores #container-form
var containerForm = document.querySelector('#container-form')

// attaches eventlistener to containerForm
containerForm.addEventListener('submit', addItem)
list = document.querySelector('#list')

// grabs and stores #header-input
headerInput = document.querySelector('#header-input')

// attaches eventlistener to headerInput
headerInput.addEventListener('keyup', filterItems)

// To add list items
function addItem(e) {
    e.preventDefault()
    textInput = document.querySelector('#text-input').value
    // creating a new list
    li = document.createElement('li')
    li.innerText = textInput
    li.className = 'items'
    list.appendChild(li)


    //    creating a new button
    button = document.createElement('button')
    i = document.createElement('i')
    i.setAttribute('class', 'delete fas fa-trash-alt')
    button.appendChild(i)
    li.appendChild(button)

}


list.addEventListener('click', deleteItems)


// Deletes list items
function deleteItems(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            li = e.target.parentElement.parentElement
            list.removeChild(li)
        }
    }


}


// filters list items
function filterItems(e) {

    // convert text to lowercase
    text = e.target.value.toLowerCase()
    items = list.getElementsByTagName('li')
    console.log(items)
    Array.from(items).forEach(function (item) {
        itemName = item.firstChild.textContent
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}