const table = document.querySelector('#myTable');
const rowTemplate = document.querySelector('#rowTemplate');
const addRowButton = document.querySelector('#addRow');
const SAVEbtn = document.querySelector('.saveRow');

let nextId = 1;
const data = [];

addRowButton.addEventListener('click', () => {
    const newRow = rowTemplate.cloneNode(true);
    newRow.style.display = '';
    newRow.id = '';
    newRow.querySelector('.id').textContent = nextId++;
    table.querySelector('tbody').appendChild(newRow);
    data.push({
        id: newRow.querySelector('.id').textContent,
        name: newRow.querySelector('.name').value,
        roll: newRow.querySelector('.roll').value,
        subject: newRow.querySelector('.subject').value,
        marks: newRow.querySelector('.marks').value,
        markedby: newRow.querySelector('.markedby').value,
    });
});

table.addEventListener('input', (event) => {
    const target = event.target;
    if (target.classList.contains('name') || target.classList.contains('roll') || target.classList.contains('subject') || target.classList.contains('marks') || target.classList.contains('markedby')) {
        const row = target.closest('tr');
        const id = row.querySelector('.id').textContent;
        const property = target.classList.contains('name') ? 'name' :
            target.classList.contains('roll') ? 'roll' :
                target.classList.contains('subject') ? 'subject' :
                    target.classList.contains('marks') ? 'marks' :
                        target.classList.contains('markedby') ? 'markedby' :
                            null;
        const value = target.value;
        const index = data.findIndex(row => row.id === id);
        if (index !== -1 && property !== null) {
            data[index][property] = value;
            row.querySelector('.saveRow').disabled = false;
        }
    }
});

table.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('saveRow')) {
        const row = target.closest('tr');
        const id = row.querySelector('.id').textContent;
        const index = data.findIndex(row => row.id === id);
        if (index !== -1) {
            data[index].name = row.querySelector('.name').value;
            data[index].age = row.querySelector('.roll').value;
            data[index].address = row.querySelector('.subject').value;
            row.querySelector('.saveRow').disabled = true;
        }
    }
});

console.log(data);


