const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const button = document.querySelector('#addBook');

const bookList = document.querySelector('#bookList');

const bookData = [{title: 'Tears', author: 'Musoni'}];

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
    removeButton.id = 'removeMe';
    // console.log('remove me');
    removeButton.innerHTML = 'Remove';
    bookListRow.appendChild(removeButton);
    bookList.appendChild(bookListRow);

    bookData.push({title: titleInput.value, author: authorInput.value});
    console.log(bookData);
    removeButton.addEventListener('click', () => {
    // console.log('clicked remove button');
      bookListRow.remove('tr');
      console.log(bookData.title);
      // delete(bookData.title);
      // console.log(bookData);
    });
  }
});

console.log(bookData);
