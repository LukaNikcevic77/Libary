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
    const newBook = new Book;
    newBook.setProps = `${title.value} ${author.value} ${pages.value} ${grade.value} "read"`;
    
    //const newBook = new Book(title, author, pages, grade, 'read');
    
  }

  else if(notread['checked'] == true){
    e.preventDefault();
    const newBook = new Book;
    newBook.setProps(title + " " + author + " " + pages + " " + grade + " " + "notread");
    //const newBook = new Book(title + " " + author + " " + pages + " " + grade + " " + "notread");
    //const newBook = new Book(title, author, pages, grade, 'notread');
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

class Book {

    set setProps(value) {
      value = value.split(' ');
      this.title = value[0];
      this.author = value[1];
      this.pages = value[2];
      this.grade = value[3];
      this.read = value[4];
      console.log(value);
      console.log(this.grade);
      this.id = randomBarCode(6);
      addBookToLibary(this.id);
      DisplayBook(this.title, value[1], value[2], value[3], value[4], this.id);
    }

    

}



function addBookToLibary(id) {
  myLibary.push(id);
}

function DisplayBook(title, author, pages, grade, read, id) {
  const bookDisplay = document.createElement('div');
  bookDisplay.classList.add('book');
  bookDisplay.setAttribute('id', 'OldBook');
  bookDisplay.setAttribute('data-barcode', id);
  console.log(title + "I come from deep end!");
  const removeicon = document.createElement('i');
  removeicon.classList.add('fa-solid');
  removeicon.classList.add('fa-circle-minus');
  removeicon.setAttribute('id', 'removeOld');
  const titleDisplay = document.createElement('h1');
  titleDisplay.textContent = title;
  titleDisplay.style.marginTop = '-8%';
  
  const authorDisplay = document.createElement('h1');
  authorDisplay.textContent = author;
  
  const pagesDisplay = document.createElement('h1');
  pagesDisplay.textContent = pages;
  const gradeDisplay = document.createElement('h1');
  gradeDisplay.textContent = grade;
  const readDisplay = document.createElement('div');
  if(read == 'read'){
    readDisplay.style.backgroundColor = 'green';
    
  }
  else if(read == 'notread'){
    readDisplay.style.backgroundColor = 'red';
    
    
  }

  console.log("Linija 154!");
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
  console.log(authorDisplay);
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