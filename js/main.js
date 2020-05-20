let items = JSON.parse(localStorage.getItem('todoList')) || [];

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

function deleteItem(item) {
    items.splice(item, 1);
    localStorage.setItem('todoList', JSON.stringify(items));
    showItems();
}

function markAsDone(item) {
    items[item].done = !items[item].done;
    localStorage.setItem('todoList', JSON.stringify(items));
    showItems();
}


// function that generates list of items and populates the html
function showItems() {
    let list = "";
    for (let i = 0; i < items.length; i++) {
        list += "<li class=" + (items[i].done ? "done" : "") + ">";
        list +='<i class="fa fa-ellipsis-v mr-1"></i><i class="fa fa-ellipsis-v mr-2"></i>';
        list += items[i].value + " ";
        list += "<div class='tools'>";
        list += "<i class='fa fa-check mr-2' onclick='markAsDone(" + i + ")'></i>";
        list += "<i class='fa fa-trash-o mr-2' onclick='deleteItem(" + i + ")'></i>";
        list += '</div>';
    }
    document.getElementById("showItems").innerHTML = list;
}

(function () {
    showItems();
})();