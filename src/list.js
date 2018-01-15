/*
list is responsible for creating a single list component
*/

let store = {lists:[], tasks:[]}

const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.title = title
      this.id = ++id
      this.taskIds = []

      console.log(this.title)
      console.log(this.id)
      console.log(this.taskIds)
      store.lists.push(this)
      console.log(store)
    }
  }

})()


const newListForm = document.querySelector("form#create-list-form")
const newListInput = document.querySelector("input[type=text]")

function handleNewListForm(event) {
  event.preventDefault()

  // creating task list
  const listTitle = newListInput.value

  const newListDiv = document.createElement("div")
  newListDiv.className = "list"

// add title
  const newListTitle = document.createElement("h2")
  newListTitle.innerText = listTitle
  newListDiv.appendChild(newListTitle)
// end title

// add <ul> tags
const ulTags = document.createElement("ul")
newListDiv.appendChild(ulTags)
// end <ul> tags

// create delete button
const xButton = document.createElement("button")
xButton.className = "delete-list"
newListDiv.appendChild(xButton)
xButton.innerText = "x"
// end delete button

document.querySelector("#lists").appendChild(newListDiv)

  let newInstance = new List(listTitle)
  newListDiv.id = `list-${newInstance.id}`
  newListInput.value = ""
// end creating task list


// send to create-task-object
  const taskForm = document.querySelector("#parent-list")
  const newListOption = document.createElement("option")
  newListOption.innerText = listTitle
  newListOption.value = newListDiv.id
  taskForm.add(newListOption)
// end create-new-task-option



// add delete list button option



}

// create handler for deleting list


 newListForm.addEventListener("submit", handleNewListForm)
