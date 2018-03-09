const myBook = {
    title: 'my awesome book',
};


function reNameBook(book, newName) {
    book.title = newName;
}


reNameBook(myBook, 'new book!');

console.log(myBook);