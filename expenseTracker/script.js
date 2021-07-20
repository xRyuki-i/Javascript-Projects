const nameField = document.querySelector('#name')
const dateField = document.querySelector('[data-date')
const amountField = document.querySelector('#amount')
const addButton = document.querySelector('[data-add]')
const table = document.querySelector("table")
const tableDisplay = document.querySelector('#removable')
var count = 0;

const clear = () => {
    nameField.value = ''
    dateField.value = ''
    amountField.value = ''
}

const addTask = (name, date, amount) => {
    const tr = document.createElement("tr")
    table.append(tr)

    const cellName = document.createElement("td")
    tr.append(cellName)
    cellName.innerText = name

    const cellDate = document.createElement("td")
    tr.append(cellDate)
    cellDate.innerText = date

    const cellAmount = document.createElement("td")
    tr.append(cellAmount)
    cellAmount.innerText = '$' + amount

    const xButton = document.createElement("button")
    tr.append(xButton)
    xButton.innerText = 'x'

    clear()

    count += 1

    display()

}

const display = () => {
    if (count != 0) {
        tableDisplay.setAttribute('style','display: none;')
    }else {
        tableDisplay.removeAttribute('style')
    }
}

addButton.addEventListener('click', (event) => {
    addTask(nameField.value, dateField.value, amountField.value)
})

table.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const tr = button.parentNode
        const table = tr.parentNode

        if(button.textContent === 'x') {
            table.removeChild(tr)
            count-=1
            display()
        }
    }
})
