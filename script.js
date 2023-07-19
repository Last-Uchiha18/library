let myLibrary = [];

function Book(title, author, pages, read) {
    return {title, author, pages, read};
}

function addBookToLibrary() {
  document.getElementById("book").showModal();
}

function createBookHTMLElement(book) {
  const {title, author, pages, read} = book;
  let addClass = ".not-read";
  let buttonTitle = "Not Read";
  let col = 'red';
  if (read === "on") {
    addClass = ".read";
    buttonTitle = "Read";
    col = 'green';
  }
  let html = `<div class="grid-item ${myLibrary.length}">
          <p>${title}</p>
          <p>${author}</p>
          <p>${pages} pages</p>
          <button class="${addClass}" style='background-color:${col}'>${buttonTitle} </button>
          <button onclick="removeBook(event)" class="${myLibrary.length}">Remove</button>
        </div>`
    return html;
}

function addBook(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const author = formData.get("author");
  const title = formData.get("title");
  const pages = formData.get("pages");
  const read = formData.get("read");
  const book = Book(title, author, pages, read);
  myLibrary.push(book);
  add(book);
}

function add(book) {
  let html = createBookHTMLElement(book);
  let element = document.querySelector('.content');
  element.innerHTML += html;
  document.getElementById("book").close();
}

function removeBook(event) {
  event.preventDefault();
  let elementsToRemove = document.getElementsByClassName(event.target.className)
  for (let i = elementsToRemove.length - 1; i >= 0; i--) {
    elementsToRemove[i].remove();
  }
}