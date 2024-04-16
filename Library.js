storedBooks = [{}, {}, {}]

// can convert this into constructor function later
{
    const bookData = [document.getElementsById('textbox_id').value];
    // value input in by form, how do we do that?
    const newBook = addnewBooks(...bookData);

    // you're going to need a name for them, or people to find them 
    // unless we did indexof, stored it and then used readstatus on it

    const addnewBooks = function (title, author, pagesNo, bookCover) {

        const title = ``;
        const author = ``;
        const pagesNo = pagesNo;
        const bookCover = ``;
        const read = false;


        return { author, title, pagesNo, read, bookCover }
        // author, title, number of pages, whether it’s been read and anything else you might want
    }
    storedBooks.push(newBook)
}




// deleteBtn.addeventlistner('click', 
// const deleteBooks = book => { storedbooks.pop(book) })

const deleteBooks = book =>  storedbooks.pop(book) 
//pops clicked book, using DOM
// or could i store this in the factory function?
// or do both






function displayBooks() {
    for (i = 0; i < storedBooks.length; i++) {
        // puts data in grid equal to grid 
        grid = storedBooks[i].display()
        // Assigns book to grid? then grid image has to be equal to book image
        grid.bookCover.src = storedBooks[i].bookCover


    }
}


// document.addeventlistner('click', let readStatus = () =>)

let readStatus = (target) => {
    const bookObj = document.getElementById(target).value
    // value, innerHTML, find what gets the object of this book
    // maybe event listener is needed?
    const bookIndex = storedBooks.indexof(bookObj)
    const readStatus = storedBooks[bookIndex].read
   
    if (readStatus === true) {
        storedBooks.book.read = false;
        document.getElementById(`btn`).innertext = `Book is being read, click to change`
    } else {
        storedBooks.book.read = true;
        document.getElementById(`btn`).innertext = `Book is not being read, click to change`
        
    }
}

const newModal = document.getqueryselector('.Test')
const popup = document.getqueryselector('.Modal')

newModal.addeventlistener('click', () => popup.showModal())