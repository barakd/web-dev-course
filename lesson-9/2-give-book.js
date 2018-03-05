const bookShelf = [{title: 'harry potter', pages: 430 }, {title: 'game of thrones', pages: 630 }, {title: 'javascript for dummies', pages: 150 }];
function giveMeTheBook(book) {
    let foundBook;
    for (let i = 0; i < bookShelf.length; i++){
        const currentBook = bookShelf[i];
        if (book.title === theBook) {
            foundBook = currentBook;
        }
        return foundBook;
    }    
}


const harryPotter = giveMeTheBook('harry potter');
const gameOfThrones = giveMeTheBook('game of thrones');