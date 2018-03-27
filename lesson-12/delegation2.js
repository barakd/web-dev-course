

document.addEventListener('DOMContentLoaded', init)


function init() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (element) {
        element.addEventListener('click', boxClickListener);
    });

    function boxClickListener(event) {
        console.log('box clicked!');
        event.target.classList.add('yellow');
    }
}

