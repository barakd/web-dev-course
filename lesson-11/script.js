const button = document.querySelector('#myBtn');
const button2 = document.querySelector('#otherBtn');
const passwordInput = document.querySelector('#password');
const passwordHint = document.querySelector('#passwordHint');
const shoppingList = document.querySelector('#shoppingList');
const addItemBtn = document.querySelector('#addItemBtn');
function onButtonClicked(event) {
    const button = event.target;
    console.log('button clicked!');
    button.classList.toggle('red');
}


function messageForStrength(strength) {
    if (!strength) {
        return 'please start typing...'
    }

    if (strength < 3) {
        return '<span class="weak">weak</span>';
    }

    if (strength < 5) {
        return '<span class="medium">medium</span>';
    }

    return '<span class="strong">strong</span>';
}

function getPasswordStrngth(password) {
    return password.length;
}


function updatePasswordHint(hint) {
    passwordHint.innerHTML = hint;
}
passwordInput.addEventListener('keyup', function (event) {
    const currentPassword = event.target.value;
    const currentStrength = getPasswordStrngth(currentPassword);
    const message = messageForStrength(currentStrength);
    updatePasswordHint(message);
})
button.addEventListener('click', onButtonClicked);
button2.addEventListener('click',onButtonClicked);

addItemBtn.addEventListener('click', function () {
    const itemToAdd = document.querySelector('#itemToAdd');
    shoppingList.appendChild(createListItemElement(itemToAdd.value));
    itemToAdd.value = '';
    
})



function createListItemElement(itemText) {
    const item = document.createElement('li');
    item.innerHTML = itemText;
    return item;
}