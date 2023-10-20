function addItems() {
    var inputField = document.getElementById("inputField").value;

    if (inputField === "") {
        alert("Please Enter A Todo Item...");
        return;
    }

    // Create list element
    var listElement = document.createElement("li");
    var listText = document.createTextNode(inputField);
    listElement.appendChild(listText);

    // Show list
    var showlist = document.getElementById("showList");
    showlist.appendChild(listElement);

    // Input text remove
    document.getElementById("inputField").value = "";

    // Deleted button on list 
    var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    listElement.appendChild(deleteBtn);
    deleteBtn.setAttribute("class", "btn");
    deleteBtn.setAttribute("onclick", "deletedItems(this)");

    // Edit button on list 
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    listElement.appendChild(editBtn);
    editBtn.setAttribute("class", "Editbtn");
    editBtn.setAttribute("onclick", "editItems(this)");
}

// Deleted item function
function deletedItems(d) {
    d.parentNode.remove();
}

// Edit Function
function editItems(e) {
    var updateValue = prompt("Enter Updated Value...", e.parentNode.firstChild.nodeValue);
    if (updateValue !== null) {
        e.parentNode.firstChild.nodeValue = updateValue;
    }
}

// Deleted All
function deletedAllItems() {
    var deletedAll = document.getElementById("showList");
    deletedAll.innerHTML = "";
}
