const messageDiv = document.querySelector('#message');
const button = $('#highlight-new-messages');

button.click(highlightNewMessages);

function highlightNewMessages() {
    const newBoxes = $('.message-box.new');
    newBoxes
        .toggleClass('highlight')
        .toggleClass('highlight2')
}