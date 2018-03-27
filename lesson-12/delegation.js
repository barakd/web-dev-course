

document.addEventListener('DOMContentLoaded', init)


function init() {
    const box3 = document.querySelector('.box-3');
    const box2 = document.querySelector('.box-2');
    box3.addEventListener('click', function () {
        console.log('other box listner function')
    });
    box3.addEventListener('click', onBox3Clicked);

    box2.addEventListener('click', onBox2Clicked);

    function onBox2Clicked(event) {
        event.target.classList.add('yellow');
        console.log('box 2 clicked!', event);
        console.log('current target!', event.currentTarget);
    }

    function onBox3Clicked(event) {
        event.target.classList.add('yellow');
        console.log('box 3 clicked!', event);
    }
}

