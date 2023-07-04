let myLibrary = [];

function Book( title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function() {
  this.read = !this.read
}
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}

function addBookToLibrary() {
   let title = document.querySelector("#title").value;
   let author = document.querySelector("#author").value;
   let pages = document.querySelector("#pages").value;
   let read = document.querySelector("#read").value;
   let newBook = new Book(title, author, pages, read);
   myLibrary.push(newBook);
   render();

}
function render() {
  let libraryEl = document.querySelector("#library-books");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <div class="card-header">
      <h1 class="card-title">${book.title}<h1>
      <h1 class="card-author">${book.author}<h1>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status ${book.read ? 'read' : 'not-read'}">${book.read ? 'Read' : 'Not Read'}</p>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">isRead</button>
      <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>
    `;

    libraryEl.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}


let addBookBtn = document.querySelector("#add-book-btn")
addBookBtn.addEventListener('click', function() {
  let addBookForm = document.querySelector("#add-book-form")
  addBookForm.style.display = "block";
})

document.querySelector("#add-book-form").addEventListener("submit",function(event) {
  event.preventDefault();
 addBookToLibrary();
})
