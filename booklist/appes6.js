class Book {
  constructor(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
    // add columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class"delete">X<a></td>
      `;
    
      list.appendChild(row);
  }
  showAlert(message, className){
  // create div
  const div = document.createElement('div');
  // add class
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#book-form');
  // insert alert
  container.insertBefore(div,form);
  // timeout 3secs
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
  }
  deleteBook(target){
    if (target.className === 'delete'){
      target.parenntElement.parenntElement.remove();
    }
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}





document.getElementById('book-form').addEventListener('submit', function(e){
  // get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  // instantiate book obj
  const book = new Book(title, author, isbn);
  // instantiate UI
  const ui = new UI();
  // validation
  if(title === "" || author === "" || isbn === ""){
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
  // add book to list;
  ui.addBookToList(book);
  // show alert
  ui.showAlert('Book Added!', 'success')
  // clear fields
  ui.clearFields();
  }
  
  e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function(e){
  const ui = new UI();
  // delete
  ui.deleteBook(e.target);
  // alert
  ui.showAlert('Book Removed.','success');

  e.preventDefault();
})