const messageDiv = document.querySelector('#message');
const button = document.querySelector('#highlight-new-messages');
// messageDiv.innerHTML = 'hello!';

button.addEventListener('click', highlightNewMessages);

function highlightNewMessages() {
    const newBoxes = document.querySelectorAll('.message-box.new');
    for (let index = 0; index < newBoxes.length; index++) {
        const element = newBoxes[index];
        element.classList.toggle('highlight');
    }
}