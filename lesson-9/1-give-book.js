const theBook = 'harry potter';
const bookShelf = [{title: 'harry potter', pages: 430 }, {title: 'game of thrones', pages: 630 }, {title: 'javascript for dummies', pages: 150 }];
function giveMeTheBook() {
    let foundBook;
    for (let i = 0; i < bookShelf.length; i++){
        const currentBook = bookShelf[i];
        if (currentBook.title === theBook) {
            foundBook = currentBook;
        }
        return foundBook;
    }    
}


const harryPotter = giveMeTheBook();