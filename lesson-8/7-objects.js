function sum(a, b) {
    const sum = a + b;
    return sum;
}

sum(1, 2);
sum(3, 1);
sum(sum(3, 1), sum(2, 5));

// const menu = {
//     pizza: '10',
//     water: '5',
//     hamburger: '30',
//     chips: '15',
// };

// console.log(menu);


// console.log('pizza cost ' + menu.pizza);


// function howMuch(item) {
//     return menu[item];
// }

// console.log('pizza sohlud cost ' + howMuch('pizza') + ' NIS');




// function tellCosts(items) {
//     for (let i = 0; i < items.length; i++){
//         let item = items[i];
//         console.log(item + ' should cost ' + howMuch(item));
//     }
// }

// tellCosts(['pizza', 'chips', 'water']);
