const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const button = document.querySelector('#addBook');

const bookList = document.querySelector('#bookList');

button.addEventListener('click', () => {
  if ((titleInput.value !== '') && (authorInput.value !== '')) {
    const bookListRow = document.createElement('tr');
    const newTitle = document.createElement('tr');
    newTitle.innerHTML = titleInput.value;
    bookListRow.appendChild(newTitle);
    const newAuthor = document.createElement('tr');
    newAuthor.innerHTML = authorInput.value;
    bookListRow.appendChild(newAuthor);
    const removeButton = document.createElement('button');
    removeButton.id ='removeMe';
    console.log('remove me');
    removeButton.innerHTML = 'Remove';
    bookListRow.appendChild(removeButton);
    bookList.appendChild(bookListRow);
  }
});
