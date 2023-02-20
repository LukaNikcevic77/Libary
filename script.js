const removeNewBook = document.querySelector('#removeNewBook');
const newBookForm = document.querySelector('.BookForm');

console.log(removeNewBook);
console.log(newBookForm);

removeNewBook.addEventListener('click', (e) => {
  newBookForm.classList.add('startPopDown');
  console.log(newBookForm);
});

