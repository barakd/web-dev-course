const p = document.querySelector('p');


function setPcolor(color) {
    for (let index = 0; index < p.classList.length; index++) {
        const currentClass = p.classList[index];
        p.classList.remove(currentClass);
    }
    p.classList.add(color)
}

function init() {
    setPcolor('pink')
    p.addEventListener('click', function (event) {
        setPcolor('yellow');
    })
}

init();