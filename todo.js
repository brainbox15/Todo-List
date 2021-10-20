
var containerForm = document.querySelector('#container-form')
containerForm.addEventListener('submit', addItem)
list = document.querySelector('#list')

headerInput = document.querySelector('#header-input')
headerInput.addEventListener('keyup', filterItems)

function addItem(e){
    e.preventDefault()
    textInput = document.querySelector('#text-input').value
    // creating a new list
    li = document.createElement('li')
    li.innerText = textInput
    li.className = 'items'
    list.appendChild(li)


//    creating a new button
button = document.createElement('button')
button.setAttribute('class', 'delete')
button.innerText= 'x'
li.appendChild(button)

}


list.addEventListener('click', deleteItems)

function deleteItems(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
        li = e.target.parentElement
        list.removeChild(li)
        }
    }


}




function filterItems(e){

    // convert text to lowercase
text =e.target.value.toLowerCase()
  items= list.getElementsByTagName('li')
console.log(items)
  Array.from(items).forEach(function(item){
       itemName = item.firstChild.textContent
      if(itemName.toLowerCase().indexOf(text) != -1){
          item.style.display = 'flex'
      }

      else{
          item.style.display = 'none'
      }
  })
}