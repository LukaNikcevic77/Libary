const removeNewBook = document.getElementById('removeNewBook');
const addBookButton = document.getElementById('AddBook');
const newBookForm = document.getElementById('BookForm');
const removeOldBook = document.getElementById('removeOld');
const oldBook = document.getElementById('OldBook');
let canAddBook = true;


removeNewBook.addEventListener('click', (e) => {
  newBookForm.classList.add('Scale-Down-anim');

  setTimeout(() => {
    newBookForm.classList.remove('Scale-Down-anim');
    newBookForm.style.visibility = 'hidden';
    canAddBook = true;
  }, 1000);
});

addBookButton.addEventListener('click', (e) => {
  if (canAddBook == true) {
    newBookForm.classList.add('Scale-Up-anim');
    canAddBook = false;
    newBookForm.style.visibility = 'none';
    setTimeout(() => {
      newBookForm.style.visibility = 'initial';
      newBookForm.classList.remove('Scale-Up-anim');
    }, 1000);
  }
});

removeOldBook.addEventListener('click', (e) => {
  oldBook.classList.add('Fade-Away-anim');

  setTimeout(() => {
    oldBook.classList.remove('Fade-Away-anim');
    oldBook.remove(this);
  }, 1000);
});
