// Using HTML, Bootstrap, and JavaScript create a single page website 
// that contains the following:

// a. A Bootstrap styled table representing your choice of data.
// b. A Bootstrap styled form that allows a user to add a new row
//    to the table when clicking on submit.

//---------------------------------------------------------------------

let id = 0; 

// When the button is clicked, this event will happen.
// By leaving it as blank (new Date()), the time will be set as current time.
document.getElementById('add').addEventListener('click',()=>{
    let createdDate = new Date();
    let table = document.getElementById('info');
    let row = table.insertRow(1);


    row.setAttribute('id',`item-${id}`);

    // Setting first cell in a row. 
    // Index (0) - Employee's Name
    // Index (1) - Date requested
    // Index (2) - Start Date
    // Index (3) - End Date
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;

    // Making 4th cell for delete button.
    // After set a new off schedule, the name section will return to blank.
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-name').value='';
})

// After submittin informations, this will give user to delete request.
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete Request';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}