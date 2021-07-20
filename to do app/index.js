class application {
    constructor (inputField) {
        this.inputField = inputField
        this.clear()
    }

    clear() {
        this.inputField.value = ''
    }

    addTask() {
        if (this.inputField.value === '') return

        const li = document.createElement("li")
        outputList.append(li)
        li.setAttribute("id","todo")
        li.innerText = this.inputField.value

        const xbutton = document.createElement("button")
        li.append(xbutton)
        xbutton.setAttribute("id", "x")
        xbutton.innerText = 'x'

        const dButton = document.createElement("button")
        li.append(dButton)
        dButton.setAttribute("id","d")
        dButton.innerText = 'done'
    }
}

const inputField = document.querySelector('[data-text]')
const addButton = document.querySelector('[data-add]')
const clearButton = document.querySelector('[data-clear]')
const division = document.querySelector("#todo")
const removeButton = document.querySelector("#x")
const doneButton = document.querySelector("#d")
const outputList = document.querySelector('[data-list]')
const ol = document.querySelector("ol")


const todo = new application(inputField);

clearButton.addEventListener('click', () => {
    todo.clear()
})


addButton.addEventListener('click', (event) => {
    todo.addTask()
    todo.clear()
})

ol.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ol = li.parentNode;
        if(button.textContent === 'x') {
            ol.removeChild(li);
        }
        if(button.textContent === 'done') {
            button.remove()
        }
    }
})




