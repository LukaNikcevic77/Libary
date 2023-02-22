const removeNewBook = document.getElementById('removeNewBook');
const addBookButton = document.getElementById('AddBook');
const newBookForm = document.getElementById('BookForm');
const removeOldBook = document.getElementById('removeOld');
const oldBook = document.getElementById('OldBook');

const main = document.getElementById('main');
const form = document.getElementById('form');
const title = document.getElementById('name');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const grade = document.getElementById('grade');
const read = document.getElementById('read-green');
const notread = document.getElementById('read-red');



let myLibary = [];

console.log(myLibary);

let canAddBook = true;
console.log(form);
let citao = '';

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



form.addEventListener('submit', (e) => {
  
  if(read['checked'] == true){
    e.preventDefault();
    const newBook = new Book(title, author, pages, grade, 'read');
    
  }

  else if(notread['checked'] == true){
    e.preventDefault();
    const newBook = new Book(title, author, pages, grade, 'notread');
  }

  else {
    e.preventDefault();
    alert("Have you read the book?!");
  }
   
  
});


function randomBarCode(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let retVal = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function Book(title, author, pages, grade, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.grade = grade;
  this.read = read;
  this.id = randomBarCode(6);
  addBookToLibary(this.id);
  DisplayBook(this.title, this.author, this.pages, this.grade, this.read, this.id);
}

function addBookToLibary(id) {
  myLibary.push(id);
}

function DisplayBook(title, author, pages, grade, read, id) {
  const bookDisplay = document.createElement('div');
  bookDisplay.classList.add('book');
  bookDisplay.setAttribute('id', 'OldBook');
  bookDisplay.setAttribute('data-barcode', id);
  
  const removeicon = document.createElement('i');
  removeicon.classList.add('fa-solid');
  removeicon.classList.add('fa-circle-minus');
  removeicon.setAttribute('id', 'removeOld');
  const titleDisplay = document.createElement('h1');
  titleDisplay.textContent = title.value;
  titleDisplay.style.marginTop = '-8%';
  
  const authorDisplay = document.createElement('h1');
  authorDisplay.textContent = author.value;
  const pagesDisplay = document.createElement('h1');
  pagesDisplay.textContent = pages.value;
  const gradeDisplay = document.createElement('h1');
  gradeDisplay.textContent = grade.value;
  const readDisplay = document.createElement('div');
  if(read == 'read'){
    readDisplay.style.backgroundColor = 'green';
    
  }
  else if(read == 'notread'){
    readDisplay.style.backgroundColor = 'red';
    
    console.log('Nisi citao')
  }

  
  readDisplay.addEventListener('click', (e) => {
    if(read == 'read'){
      readDisplay.style.backgroundColor = 'red';
      read = 'notread'
    }
    else if(read == 'notread'){
      readDisplay.style.backgroundColor = 'green';
      read = 'read';
      console.log('Nisi citao')
    }
  })
  readDisplay.textContent = 'Read';
  bookDisplay.appendChild(removeicon);
  bookDisplay.appendChild(titleDisplay);
  bookDisplay.appendChild(authorDisplay);
  bookDisplay.appendChild(pagesDisplay);
  bookDisplay.appendChild(gradeDisplay);
  bookDisplay.appendChild(readDisplay);
  main.appendChild(bookDisplay);
  console.log("I happend");

  removeicon.addEventListener('click', (e) => {
    bookDisplay.classList.add('Fade-Away-anim');
  
    setTimeout(() => {
      bookDisplay.classList.remove('Fade-Away-anim');
      bookDisplay.remove(this);
    }, 1000);
  }
  )
}

console.log(citao);