const book = {
  id: 1,
  title: 'book'
}

const newBook = {
  id: 2,
  ...book,
  title: 'new book'
}

console.log(newBook)