const $addItemBtn = $('#addItem');
const $itemToAddInput = $('#itemToAdd');
const $list = $('#item-list');
$(document).on('click', '.todo-item', function (e) {
    const element = e.target;
    $(element).toggleClass('green');
})

$addItemBtn.click(function () {
    const itemText = $itemToAddInput.val();
    $list.append(`<li class="todo-item">${itemText}</li>`)
})