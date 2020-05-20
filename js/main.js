let items = JSON.parse(localStorage.getItem('todoList')) || [];

// add item
function addItem() {
    let inputBox = document.getElementById('todoInput');
    let item = inputBox.value;

    if (item.length == 0) return alert("Please add a task");

    items.push({
        value: item,
        time: new Date()
    });

    localStorage.setItem('todoList', JSON.stringify(items));

    showItems();
    inputBox.value = "";
}

// delete item
function deleteItem(item) {
    items.splice(item, 1);
    localStorage.setItem('todoList', JSON.stringify(items));
    showItems();
}

// mark as complete
function markDone(item) {
    items[item].done = !items[item].done;
    localStorage.setItem('todoList', JSON.stringify(items));
    showItems();
}

// generate list
function showItems() {
    let list = "";
    for (let i = 0; i < items.length; i++) {
        list += "<li class=" + (items[i].done ? "bg-lightgreen" : "") + ">";
        list +='<i class="fa fa-ellipsis-v mr-1"></i><i class="fa fa-ellipsis-v mr-2"></i>';
        list += items[i].value + " ";
        list += '<div class="tools">';
        list += "<i class='fa fa-check mr-2' onclick='markDone(" + i + ")'></i>";
        list += "<i class='fa fa-trash-o mr-2' onclick='deleteItem(" + i + ")'></i>";
        list += '</div>';
    }
    document.getElementById("showItems").innerHTML = list;
}

(function () {
    showItems();
})();